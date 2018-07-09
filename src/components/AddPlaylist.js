import React, { Component } from 'react';
import { CSSTransitionGroup } from 'react-transition-group'


class AddPlaylist extends Component{



	render(){
		let content = []
		if(this.props.show){
			content.push([
				<h1 className="fest_name">{this.props.fest_name}</h1>,
				<a href="javascript:window.open('https://accounts.spotify.com/authorize?client_id=47c457c054214945af809dc6674f5cff&redirect_uri=http:%2F%2Ffestiv-app.herokuapp.com/success&scope=user-read-private%20user-read-email%20playlist-modify-private&response_type=token')"><h1 className="add_to_title">Add Playlist</h1></a>
			])
		}
		return(
			<div className="add_to_tab">
				<CSSTransitionGroup transitionName="track_trans" transitionEnterTimeout={500} transitionLeaveTimeout={300}>
					{content}
				</CSSTransitionGroup>
			</div>
		)
	}
}

export default AddPlaylist;