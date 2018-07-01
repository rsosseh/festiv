import React, { Component } from 'react';

if(window.opener){
	window.opener.postMessage(window.location.hash.substring(1), "*")
	window.close()
}

class SuccessHandler extends Component{
	render(){
		return(
			<div>
				{window.location.hash.substring(1)}
			</div>
		);
	}
}

export default SuccessHandler