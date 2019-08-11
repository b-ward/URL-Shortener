import React from "react";
import axios from "axios";

class AddPost extends React.Component {
  urlRef = React.createRef();

  shortenURL = async event => {
    // 1.  stop the form from submitting
    event.preventDefault();

    const response = await axios.post(
      'http://ec2-54-92-183-111.compute-1.amazonaws.com/api/url/shorten',
      //Body
      {"longUrl": "https://www.amazon.com.au/FITBIT-Versa-Peach-Rose-Gold/dp/B07B9WFFJV?pf_rd_p=6cf8387c-7649-4d6e-a715-18f9cf456319&pd_rd_wg=v6eqI&pf_rd_r=9BXGEB8E5EH8RM451PYG&ref_=pd_gw_unk&pd_rd_w=fiBtR&pd_rd_r=d50d8b16-8f6f-47d0-aa32-a7cab4f016dc"},
      //Headers
      { headers: { 'Content-Type': 'application/json' } }
    )
    console.log(response.data)

    // const url = {
    //   url: this.urlRef.current.value,
    // };
    // refresh the form
    event.currentTarget.reset();
  };
  render() {
    return (
      <form className="url-shortener" onSubmit={this.shortenURL}>
        <input name="long-url" ref={this.urlRef} type="text" placeholder="URL to be shortened..." />
        <button type="submit">+ Shorten URL</button>
      </form>
    );
  }
}

export default AddPost;