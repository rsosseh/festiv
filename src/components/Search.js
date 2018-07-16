import React, { Component } from 'react';

let festivals_to_search = ''

class Search extends Component{

	searchFestival = (e) => {
		let ul = document.getElementById("festival_bar")
		let li = ul.getElementsByTagName('li')
		let first = true;

		if(document.getElementById('search_bar').value == ""){
			for(var i = 0; i < li.length; i++){
				li[i].style.display = "none";
			}
		}
		else if(e.key == 'Enter'){
			this.props.getFestival(festivals_to_search)
		}
		else{
			for(var i = 0; i < li.length; i++){
				if(li[i].innerText.toLowerCase().includes(document.getElementById('search_bar').value.toLowerCase())){
					li[i].style.display = "list-item";
					if(first){
						first = false
						festivals_to_search = li[i].innerText
					}
				}
				else{
					li[i].style.display = "none";
				}
			}
		}
	}

	render(){
    	let festivals = Object.keys(this.props.eventList).map(name => {
    		return <li key={name} value={name}>{name}</li>
    	})
    	let years = ['2018'].map(year => {
    		return <option key={year} value={year}>{year}</option>
    	})

		return(
			<div className="SearchWrapper">
				<h1 className="festivTitle">festiv</h1>
				<p className="festivDesc">festival playlist maker</p>
				<input type='text' id="search_bar" onKeyUp={this.searchFestival}/>
				<ul id="festival_bar">
					{festivals}
				</ul>

				<p className="credits">Powered by <b>Songkick</b> and <b>Spotify</b></p>
			</div>
		);
	}
}

export default Search;