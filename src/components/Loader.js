import React, { Component } from 'react';

class Loader extends Component{
	render(){
		let loader = [];
		if(this.props.show){
			loader.push([<div id="loader"><img src="/Loading_icon.gif" /></div>])
		}
		else{
			loader.push([<div></div>])
		}

		return(
			<div>	
				{loader}
			</div>
		);
	}
}

export default Loader;