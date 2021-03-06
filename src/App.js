import {useState, useEffect} from "react";

import SearchBar from "./components/SearchBar";
import SearchResults from "./components/SearchResults";
import Playlist from "./components/Playlist";
import Spotify from "./util/spotify";

import './App.css';

function App() {
  const hardCodedResults = [{name: "Numb", artist: "Linkin Park", album: "meteora", id: 1},
                        {name: "Foreword", artist: "Linkin Park", album: "meteora", id: 2},
                        {name: "Hit The Floor", artist: "Linkin Park", album: "meteora", id: 3},
                        {name: "Easier to Run", artist: "Linkin Park", album: "meteora", id: 4},
                        {name: "From the Inside", artist: "Linkin Park", album: "meteora", id: 5},];

  const [results, setResults] = useState([]);
  const [playlistName, setPlaylistName] = useState("Metal Workout");
  const [playlistTracks, setPlaylistTracks] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const addTrack = (track) => {
    if(playlistTracks.find(savedTrack => savedTrack.id === track.id)) {
      console.log("track is already in playlist");
      return;
    } else {
      const newPlaylist = [...playlistTracks, track];
      setPlaylistTracks(newPlaylist);
    }
  }

  const removeTrack = (track) => {
    const newPlaylist = playlistTracks.filter(i => i.id !== track.id);
    setPlaylistTracks(newPlaylist);
  }

  const search = (term) => {
    let searchResult = Spotify.search(term);
    searchResult.then((result) => {
      //console.log(result)
      setResults(result);
    })
  }

  const savePlaylist = () => {
    let trackUris = [];
    Spotify.savePlaylist(playlistName, playlistTracks);


    return trackUris;
  }

  return (
    <div>
      <h1>Ja<span className="highlight">mmm</span>ing</h1>
      <div className="App">
        <SearchBar onSearch={search} searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>
        <div className="App-playlist">
          <SearchResults results={results} onAdd={addTrack}/>
          <Playlist playlistName={playlistName} setPlaylistName={setPlaylistName} playlistTracks={playlistTracks} onRemove={removeTrack} onSave={savePlaylist}/>
        </div>
      </div>
    </div>
  );
}

export default App;
