import React, { Component } from 'react';
import Search from './Search';
import PlaylistAdder from './PlaylistAdder';
import AddPlaylist from './AddPlaylist';

const apiKey = "2LHZxfHghd8t0pPt";
const eventList = {
  'Afropunk':
    {
      '2018': '33422634'
    },
  'Montreux Jazz Festival':
  {
    '2018': '33525674'
  },
  'Dour Festival':{
  	'2018': '32111594'
  },
  'Longitude':{
  	'2018': '32798749'
  },
  'Life is Beautiful Festival':{
  	'2018': '33699124'
  },
  'Rock Werchter':{
  	'2018': '32066229'
  },
  'Beauregard Festival': {
  	'2018': '32081804'
  },
  'Festival Cruïlla': {
  	'2018': '31445154'
  },
  'iHeartRadio Music Festival': {
  	'2018': '34036934'
  },
  'Pilgrimage Music & Cultural Festival': {
  	'2018': '33599254'
  }

}
let fest_name = ''
let show = false;
var user_token = ''
var track_holder = []

var SpotifyWebApi = require('spotify-web-api-node');
var spotifyApi = new SpotifyWebApi()

async function get_spotify_token() {
  let token_json = await fetch("https://spotify-token-getter.herokuapp.com/token")
  let token = await token_json.json()
  spotifyApi.setAccessToken(token.token)
}

// async function add_playlist(user_token){
// 	spotifyApi.resetAccessToken();
// 	spotifyApi.setAccessToken(user_token)
// 	let user = await spotifyApi.getMe()
// 	console.log(user)
// 	let playlist_name = 'festiv - '+ fest_name + ' Playlist'
// 	spotifyApi.createPlaylist(user.body.id, playlist_name, { 'public' : false })
//   	.then(function(playlist) {
//   		let tracks_string = []
//   		track_holder.map( (track) => {
//   			tracks_string.push('spotify:track:'+track.id)
//   		})
//   		if(tracks_string.length > 100){
//   			tracks_string = tracks_string.slice(0,100)
//   		}
//   		console.log(tracks_string)
//     	spotifyApi.addTracksToPlaylist(user.body.id, playlist.body.id, tracks_string)
//   	}, function(err) {
//     	console.log('Something went wrong!', err);
//   	});
// }

get_spotify_token()


<<<<<<< HEAD
// window.addEventListener("message", receiveMessage, false)
// function receiveMessage(event){
//   if(event.data){
// 	 user_token = event.data.split('=')[1].split('&')[0]
//   }
// 	add_playlist(user_token)
// }
=======
window.addEventListener("message", receiveMessage, false)
function receiveMessage(event){
	if(event.data){
		user_token = event.data.split('=')[1].split('&')[0]
		add_playlist(user_token)
	}
}
>>>>>>> 3d346d7d4f7e9993a640bf432c357a80d41a8c98

class Content extends Component{
  state = {
    tracks: []
  }

  getFestival = async (fest) => {
    const artist = []
    fest_name = fest
    const fest_year = 2018
    const eventId = eventList[fest_name][fest_year];
    const apiCall = await fetch(`https://api.songkick.com/api/3.0/events/${eventId}.json?apikey=${apiKey}`);
    const data = await apiCall.json();
    data.resultsPage.results.event.performance.map(performance => {
      return artist.push(performance.displayName)
    });
    this.get_id(artist)
  }

  get_id = async (artist) => {
    let promises = Promise.all(artist.map(async (artist) => {
      let art = await spotifyApi.searchArtists(artist)
      if(art.body.artists.items.length != 0){
        return art.body.artists.items[0].id
      }
      else{
        return "not found"
      }
    }))
    let i = await promises
    let cleaned_i = i.filter((idx) => {return idx != "not found"})
    this.get_tracks(cleaned_i)
  }

  get_tracks = async (ids) => {
    let promises = Promise.all(ids.map(async (id) => {
      if(id != "not found"){
        let track = await spotifyApi.getArtistTopTracks(id, 'US')
        return track.body.tracks[0]
      }
    }))
    track_holder  = await promises
    track_holder = track_holder.filter((idx) => {return idx != undefined})
    show = true
    this.setState({
      tracks:track_holder
    })
  }


	render(){
		
		return(
			<div className="App">
				<Search getFestival={this.getFestival} eventList = {eventList}/>
        <PlaylistAdder tracks={this.state.tracks}/>
        <AddPlaylist fest_name = {fest_name} show={show} />
      </div>
		)
	}
}

export default Content
