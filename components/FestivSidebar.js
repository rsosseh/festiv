import React from 'react';

class FestivSidebar extends React.Component{
    callSpotify = () => {
        const spotifyEndpoint = "https://accounts.spotify.com/authorize?response_type=code&client_id=47c457c054214945af809dc6674f5cff&redirect_uri=http:%2F%2Flocalhost:3000/tokenCallback&scope=user-read-private%20user-read-email%20playlist-modify-private&response_type=token'";
        window.open(spotifyEndpoint);
    }
	render(){
        const { festivalName, playlistAdded } = this.props;

		return(
            <div className="festiv__sidebar">
                <h1 className="festiv__festival-name">{festivalName}</h1>
                <a onClick={playlistAdded ? null : this.callSpotify}>
                    <h1 className={`festiv__add-playlist-button ${playlistAdded ? 'added': ''}`}>{playlistAdded ? 'Added' : 'Add Playlist'}</h1>
                </a>
            </div>
		)
	}
}

export default FestivSidebar;
