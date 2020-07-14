import React from 'react';

class FestivSidebar extends React.Component{
    callSpotify = () => {
        const spotifyEndpoint = "https://accounts.spotify.com/authorize?client_id=47c457c054214945af809dc6674f5cff&redirect_uri=http:%2F%2Ffestiv-app.herokuapp.com/success&scope=user-read-private%20user-read-email%20playlist-modify-private&response_type=token'";
        window.open(spotifyEndpoint);
    }
	render(){
        const { festivalName } = this.props;

		return(
            <div className="festiv__sidebar">
                <h1 className="festiv__festival-name">{festivalName}</h1>
                <a onClick={this.callSpotify}>
                    <h1 className="festiv__add-playlist-button">Add Playlist</h1>
                </a>
            </div>
		)
	}
}

export default FestivSidebar;
