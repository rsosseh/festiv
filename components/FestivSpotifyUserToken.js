import React, { Component } from 'react';


//landing page for spotify api user token generation
//pings main app w user token on redirect.
class FestivSpotifyUserToken extends Component{
    componentDidMount(){
        if(window.opener){
            window.opener.postMessage(window.location.href.split('?code=')[1], "*")
            window.close()
        }
    }
	render(){
		return(
			<div></div>
		);
	}
}

export default FestivSpotifyUserToken