import React from 'react';

let festival_items, current_list, festivals_to_search, selected_idx;
class FestivSearchbar extends React.Component{
	searchFestival = (e) => {
        const { getFestivalArtists } = this.props;
        let first = true;
        //hide search contentts
		if(document.getElementById('js__festiv__search-bar').value === ""){
			for(var i = 0; i < festival_items.length; i++){
				festival_items[i].style.display = "none";
				festival_items[i].classList.remove('selected-festival-name')
			}
        }
        //start playlist search
		else if(e.key === 'Enter'){
			for(var j = 0; j < festival_items.length; j++){
				festival_items[j].style.display = "none";
				festival_items[j].classList.remove('selected-festival-name')
			}
			getFestivalArtists(festivals_to_search)
		}
		//down arrow
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
		//up arrow
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
            //update list of suggested searches
			current_list = []
			selected_idx = 0
			for(var o = 0; o < festival_items.length; o++){
				if(festival_items[o].innerText.toLowerCase().includes(document.getElementById('js__festiv__search-bar').value.toLowerCase())){
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
        const { getFestivalArtists } = this.props;
		for(var i = 0; i < festival_items.length; i++){
			festival_items[i].style.display = "none";
			festival_items[i].classList.remove('selected-festival-name')
		}
		getFestivalArtists(fest_name.name)
	}
	componentDidMount(){
		festival_items = document.getElementById("js__festiv__festival-bar").getElementsByTagName('li')
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
        const { eventList } = this.props;
    	let festivals = Object.keys(eventList).map(name => {
    		let fest_name = {name}
    		return <li key={name} value={name} onClick={(e) => this.clickIntiaitedSearch(fest_name)}><span>{name}</span></li>
    	})
        return(
			<div className="festiv__search-wrapper">
				<div className="festiv__search_container">
					<div className="festiv__hero">
						<h1 className="festiv__title">festiv</h1>
						<p className="festiv__desc">festival playlist maker</p>
					</div>
					<input type='text' className="festiv__search-bar" id="js__festiv__search-bar" placeholder="Search..." onKeyUp={this.searchFestival}/>
					<ul className="festiv__festival-bar" id="js__festiv__festival-bar">
						{festivals}
					</ul>

					<p className="festiv__credits">Powered by <b>Songkick</b> and <b>Spotify</b></p>
				</div>
			</div>
		);
	}
}

export default FestivSearchbar;