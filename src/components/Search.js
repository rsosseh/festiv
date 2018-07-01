import React, { Component } from 'react';

class Search extends Component{
	render(){

    	let festivals = Object.keys(this.props.eventList).map(name => {
    		return <option key={name} value={name}>{name}</option>
    	})
    	let years = ['2018'].map(year => {
    		return <option key={year} value={year}>{year}</option>
    	})

		return(
			<div className="SearchWrapper">
				<h1 className="festivTitle">festiv</h1>
				<p className="festivDesc">festival playlist maker</p>
				<form onSubmit={this.props.getFestival}>
					<select name='festival_name'>
						{festivals}
					</select>
					<select name='festival_year'>
						{years}
					</select>
					<input type="submit" value="Search" />
				</form>
				<p className="credits">Powered by <b>Songkick</b> and <b>Spotify</b></p>
			</div>
		);
	}
}

export default Search;