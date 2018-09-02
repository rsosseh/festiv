import React, { Component } from 'react';
import { CSSTransitionGroup } from 'react-transition-group'

let item_classes = ['track_item']

class PlaylistAdder extends Component{



	render(){
		let tracks = this.props.tracks.map( (track) => {
			var artists_string = track.artists[0].name
			if(track.artists.length > 1){
				for (var i = 1; i < track.artists.length; i++){
					artists_string += ', ' + track.artists[i].name
				}
			}

			return <div key={track.name} className={item_classes.join(' ')} style={{"transitionDelay": `${ i * .05 }s` }}>
					<a href={track.external_urls.spotify}><img alt={track.name} src={track.album.images[1].url} /></a>
					<div className="track_info">
						<p>{track.name}</p>
						<p>{artists_string}</p>
					</div>
				</div>
		})

		return(
			<div className="tracks">
				<div className="track_container">
					<CSSTransitionGroup transitionName="track_trans" transitionEnterTimeout={500} transitionLeaveTimeout={300}>
						{tracks}
					</CSSTransitionGroup>
				</div>
			</div>
		);
	}
}

export default PlaylistAdder;