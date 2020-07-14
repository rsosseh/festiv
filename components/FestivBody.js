import React from 'react';
import FestivSearchbar from './FestivSearchbar';
import FestivTrackPanel from './FestivTrackPanel';
import FestivSidebar from './FestivSidebar';
import FestivLoader from './FestivLoader';

//SongKick API key
const apiKey = "2LHZxfHghd8t0pPt";

//List of festivals and their SongKick IDs
const eventList = {
  'Afropunk': '33422634',
  'Montreux Jazz Festival': '33525674',
  'Dour Festival': '32111594',
  'Longitude': '32798749',
  'Life is Beautiful Festival': '33699124',
  'Rock Werchter': '32066229',
  'Beauregard Festival': '32081804',
  'Festival Cruïlla':'31445154',
  'iHeartRadio Music Festival': '34036934',
  'Pilgrimage Music & Cultural Festival': '33599254'
}

class FestivBody extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      festivalName: null,
      tracks: [],
      playlistAdded: false,
      isLoading: false,
      spotifyToken: null
    }
  }
  //reads user token from break out window
  receiveMessage = (event) => {
    if(event.data){
      this.setState({
        playlistAdded: true
     })
     this.addPlaylist(event.data)
    }
  }
  addPlaylist = async (userToken) => {
    const { festivalName } = this.state;
    let q = await fetch("https://api.spotify.com/v1/me", {
      method: "GET",
      headers: {
        "Authorization" : "Bearer " + userToken
      }
    })
    let user = await q.json()
    let playlist_name = 'festiv - '+ festivalName + ' Playlist'
    let e = "https://api.spotify.com/v1/users/"+ user.id +"/playlists"

    //create playlist on user's spotify account
    fetch(e, {
      method: "POST",
      headers: {
        "Authorization" : "Bearer " + userToken,
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

        //add tracks to playlist
        let s = "https://api.spotify.com/v1/playlists/" + playlist.id + "/tracks?uris=" + tracks_string.join(",")
        fetch(s, {
          method:"POST",
          headers: {
            "Authorization" : "Bearer " + userToken,
            "Content-Type" : "application/json"
          }
        })
      }
    })
  }
  getSpotifyToken = async () => {
    let token_json = await fetch("https://spotify-token-getter.herokuapp.com/token")
    let token = await token_json.json()
    this.setState({spotifyToken: token.token});
  }
  getFestivalArtists = async (festivalName) => {
    this.setState({isLoading:true, festivalName: festivalName})
    const artists = [];
    const eventDataRaw = await fetch(`https://api.songkick.com/api/3.0/events/${eventList[festivalName]}.json?apikey=${apiKey}`);
    const eventData = await eventDataRaw.json();
    eventData.resultsPage.results.event.performance.map(performance => {
      return artists.push(performance.displayName)  
    });
    //returning first 100 because of api call max
    this.getSpotifyIds(artists.splice(0,100))
  }
  getSpotifyIds = async (artists) => {
    const { spotifyToken } = this.state;
    let spotifyArtistPromises = Promise.all(artists.map(async (artist) => {
      artist = artist.split(" ").join("%20")
      var query = "https://api.spotify.com/v1/search?q=" + artist + "&type=artist"
      let c = await fetch(query, {
        method: "GET",
        headers: {
          "Authorization":"Bearer " + spotifyToken 
        }
      })
      return await c.json()
    }));
    let spotifyAristsData = await spotifyArtistPromises
    let spotifyArtistIds = spotifyAristsData.map((res) => {
      if(res.artists.items.length !== 0){
        return res.artists.items[0].id
      }
      else{
        return "not found"
      }
    })
    spotifyArtistIds = spotifyArtistIds.filter((idx) => {return idx !== "not found"})
    this.getTracks(spotifyArtistIds)
  }
  getTracks = async (ids) => {
    const { spotifyToken } = this.state;
    let trackPromises = Promise.all(ids.map(async (id) => {
      let query = "https://api.spotify.com/v1/artists/"+ id +"/top-tracks?country=US"
      let c = await fetch(query, {
        method: "GET",
        headers:{
          "Authorization" : "Bearer " + spotifyToken
        }
      })
      let track = await c.json()
      return track.tracks[0]
    }))
    let trackHolder  = await trackPromises
    trackHolder = trackHolder.filter((idx) => {return idx !== undefined})
    this.setState({
      tracks:trackHolder,
      playlistAdded: false,
      isLoading: false
    })
  }
  componentDidMount(){
    window.addEventListener("message", this.receiveMessage, false)
    this.getSpotifyToken();
  }
	render(){
    const { festivalName, tracks, playlistAdded, isLoading } = this.state;
		
		return(
			<div className="App">
        <FestivSearchbar getFestivalArtists={this.getFestivalArtists} eventList={eventList}/>
        <FestivSidebar festivalName={festivalName} playlistAdded={playlistAdded}/>
        <FestivTrackPanel tracks={tracks}/>
        <FestivLoader isLoading={isLoading}/>
      </div>
		)
	}
}

export default FestivBody;