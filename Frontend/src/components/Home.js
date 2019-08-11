import React from 'react';

import samplePosts from '../sample-posts'
import ShortenURL from './shortenURL';

class Home extends React.Component {  
    state = {
        posts: samplePosts
    }

    render() {
        console.log(this.state.posts)
        return (
            <div className="home">
                <h1>Shorten a URL</h1>
                <ShortenURL/>
            </div>
        )
    }
}

export default Home;