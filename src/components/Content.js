// TO-DO:

// loading gif
// UI weirdness, especially in mobile


import React, { Component } from 'react';
import Search from './Search';
import PlaylistAdder from './PlaylistAdder';
import AddPlaylist from './AddPlaylist';
import Loader from './Loader';

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
var server_token = ''
var track_holder = []

class Content extends Component{
  state = {
    tracks: [],
    playlist_added: false,
    is_loading: false
  }

  get_spotify_token = async () => {
    let token_json = await fetch("https://spotify-token-getter.herokuapp.com/token")
    let token = await token_json.json()
    server_token = token.token
  }

  receiveMessage = (event) => {
    if(event.data){
      this.setState({
        playlist_added: true
     })
     this.add_playlist(event.data.split('=')[1].split('&')[0])
    }
  }

  add_playlist = async (user_token) => {
    let q = await fetch("https://api.spotify.com/v1/me", {
      method: "GET",
      headers: {
        "Authorization" : "Bearer " + user_token
      }
    })
    let user = await q.json()
    let playlist_name = 'festiv - '+ fest_name + ' Playlist'
    let e = "https://api.spotify.com/v1/users/"+ user.id +"/playlists"

    fetch(e, {
      method: "POST",
      headers: {
        "Authorization" : "Bearer " + user_token,
        "Content-Type" : "application/json"
      },
      body: JSON.stringify({name: playlist_name, public:false}),
      mode: "cors"
    }).then( async (resp) => {
      if(resp.ok){
        let playlist = await resp.json()

        let tracks_string = []
        tracks_string = track_holder.map( (track) => {
          return 'spotify%3Atrack%3A'+track.id
        })

        let s = "https://api.spotify.com/v1/playlists/" + playlist.id + "/tracks?uris=" + tracks_string.join(",")
        fetch(s, {
          method:"POST",
          headers: {
            "Authorization" : "Bearer " + user_token,
            "Content-Type" : "application/json"
          }
        })
      }
    })
  }

  getFestival = async (fest) => {
    this.setState({is_loading:true})
    const artist = []
    fest_name = fest
    const fest_year = 2018
    const eventId = eventList[fest_name][fest_year];
    const apiCall = await fetch(`https://api.songkick.com/api/3.0/events/${eventId}.json?apikey=${apiKey}`);
    const data = await apiCall.json();
    data.resultsPage.results.event.performance.map(performance => {
      return artist.push(performance.displayName)
    });
    this.get_id(artist.splice(0,100))
  }

  get_id = async (artist) => {
    let promises = Promise.all(artist.map(async (artist) => {
      artist = artist.split(" ").join("%20")
      var q = "https://api.spotify.com/v1/search?q=" + artist + "&type=artist"
      let c = await fetch(q, {
        method: "GET",
        headers: {
          "Authorization" : "Bearer " + server_token 
        }
      })
      return await c.json()
    }))
    let i = await promises
    let t = i.map((res) => {
      if(res.artists.items.length !== 0){
        return res.artists.items[0].id
      }
      else{
        return "not found"
      }
    })
    let cleaned_t = t.filter((idx) => {return idx !== "not found"})
    this.get_tracks(cleaned_t)
  }

  get_tracks = async (ids) => {
    let promises = Promise.all(ids.map(async (id) => {
      let q = "https://api.spotify.com/v1/artists/"+ id +"/top-tracks?country=US"
      let c = await fetch(q, {
        method: "GET",
        headers:{
          "Authorization" : "Bearer " + server_token
        }
      })
      let track = await c.json()
      return track.tracks[0]
    }))
    track_holder  = await promises
    track_holder = track_holder.filter((idx) => {return idx !== undefined})
    show = true
    this.setState({
      tracks:track_holder,
      playlist_added: false,
      is_loading: false
    })
  }

  componentWillMount(){
    this.get_spotify_token()
  }

  componentDidMount(){
    window.addEventListener("message", this.receiveMessage, false)
  }

	render(){
		
		return(
			<div className="App">
				<Search getFestival={this.getFestival} eventList = {eventList}/>
        <AddPlaylist fest_name = {fest_name} show={show} added={this.state.playlist_added}/>
        <PlaylistAdder tracks={this.state.tracks}/>
        <Loader show={this.state.is_loading}/>
      </div>
		)
	}
}

export default Content