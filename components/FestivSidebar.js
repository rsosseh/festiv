import React from 'react';

class FestivSidebar extends React.Component{
	render(){
        const { festivalName } = this.props;
        const spotifyEndpoint = "javascript:window.open('https://accounts.spotify.com/authorize?client_id=47c457c054214945af809dc6674f5cff&redirect_uri=http:%2F%2Ffestiv-app.herokuapp.com/success&scope=user-read-private%20user-read-email%20playlist-modify-private&response_type=token')";

		return(
            <div className="festiv__sidebar">
                <div className="add_to_tab">
                    <h1 className="fest_name">{festivalName}</h1>
                    <a href={spotifyEndpoint}>
                        <h1 className="add_to_title">Add Playlist</h1>
                    </a>
                </div>

            </div>
		)
	}
}

export default FestivSidebar;
