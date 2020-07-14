import React from 'react';

class FestivTrackPanel extends React.Component{
    render(){
        const { tracks } = this.props;
		let trackElements = tracks.map( (track) => {
			var artists_string = track.artists[0].name
			if(track.artists.length > 1){
				for (var i = 1; i < track.artists.length; i++){
					artists_string += ', ' + track.artists[i].name
				}
			}

			return(
                <div key={track.name} className="festiv__track-item">
					<a href={track.external_urls.spotify}><img alt={track.name} src={track.album.images[1].url} /></a>
					<div className="festiv__track_info">
						<p>{track.name}</p>
						<p>{artists_string}</p>
					</div>
                </div>
            )
		})

		return(
			<div className="festiv__tracks">
				{trackElements}
			</div>
		);
	}
}

export default FestivTrackPanel;