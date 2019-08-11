import React from 'react';

import ShortenURL from './shortenURL';

class Home extends React.Component {  
    render() {
        return (
            <div className="home">
                <h1>Shorten a URL</h1>
                <ShortenURL/>
            </div>
        )
    }
}

export default Home;