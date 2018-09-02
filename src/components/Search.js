import React, { Component } from 'react';

let festivals_to_search = ''
let festival_items = []
let current_list = []
let selected_idx = 0


class Search extends Component{

	searchFestival = (e) => {
		let first = true;
		

		if(document.getElementById('search_bar').value === ""){
			for(var i = 0; i < festival_items.length; i++){
				festival_items[i].style.display = "none";
				festival_items[i].classList.remove('selected-festival-name')
			}
		}
		else if(e.key === 'Enter'){
			for(var j = 0; j < festival_items.length; j++){
				festival_items[j].style.display = "none";
				festival_items[j].classList.remove('selected-festival-name')
			}
			this.props.getFestival(festivals_to_search)
		}
		// down arrow
		else if(e.keyCode === 40){
			if(selected_idx !== current_list.length - 1){
				for(var k = 0; k < festival_items.length; k++){
					festival_items[k].classList.remove('selected-festival-name')
				}
				selected_idx += 1
				current_list[selected_idx].classList.add('selected-festival-name')
				festivals_to_search = current_list[selected_idx].innerText
			}
		}
		// up arrow
		else if(e.keyCode === 38){
			if(selected_idx !== 0){
				for(var l = 0; l < festival_items.length; l++){
					festival_items[l].classList.remove('selected-festival-name')
				}
				selected_idx -= 1
				current_list[selected_idx].classList.add('selected-festival-name')
				festivals_to_search = current_list[selected_idx].innerText
			}
		}
		else{
			current_list = []
			selected_idx = 0
			for(var o = 0; o < festival_items.length; o++){
				if(festival_items[o].innerText.toLowerCase().includes(document.getElementById('search_bar').value.toLowerCase())){
					festival_items[o].style.display = "list-item";
					current_list.push(festival_items[o])
					if(first){
						first = false
						festivals_to_search = festival_items[o].innerText
						festival_items[o].classList.add('selected-festival-name')
					}
				}
				else{
					festival_items[o].style.display = "none";
				}
			}
		}
	}

	clickIntiaitedSearch = (fest_name) => {
		for(var i = 0; i < festival_items.length; i++){
			festival_items[i].style.display = "none";
			festival_items[i].classList.remove('selected-festival-name')
		}
		this.props.getFestival(fest_name.name)
	}


	componentDidMount(){
		festival_items = document.getElementById("festival_bar").getElementsByTagName('li')
		for(var i = 0; i < festival_items.length; i++){
			festival_items[i].addEventListener("mouseenter", function(){
				for(var j = 0; j < festival_items.length; j++){
					festival_items[j].classList.remove('selected-festival-name')
				}
				this.classList.add('selected-festival-name')
				festivals_to_search = this.innerText
			})
		}
	}

	render(){
    	let festivals = Object.keys(this.props.eventList).map(name => {
    		let fest_name = {name}
    		return <li key={name} value={name} onClick={(e) => this.clickIntiaitedSearch(fest_name)}><span>{name}</span></li>
    	})
    	// let years = ['2018'].map(year => {
    	// 	return <option key={year} value={year}>{year}</option>
    	// })

		return(
			<div className="SearchWrapper">
				<div className="searchContainer">
					<div className="textContainer">
						<h1 className="festivTitle">festiv</h1>
						<p className="festivDesc">festival playlist maker</p>
					</div>
					<input type='text' id="search_bar" placeholder="Search..." onKeyUp={this.searchFestival}/>
					<ul id="festival_bar">
						{festivals}
					</ul>

					<p className="credits">Powered by <b>Songkick</b> and <b>Spotify</b></p>
				</div>
			</div>
		);
	}
}

export default Search;