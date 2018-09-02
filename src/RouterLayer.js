import React, { Component } from 'react';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

setInterval(function(){
	fetch('https://festiv-app.herokuapp.com/')
}, 300000)

class RouterLayer extends Component{
	render(){
		return(
			<BrowserRouter>
				<App />
			</BrowserRouter>
		)
	}
}

export default RouterLayer