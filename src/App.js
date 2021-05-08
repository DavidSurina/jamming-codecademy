import {useState} from "react";

import SearchBar from "./components/SearchBar";
import SearchResults from "./components/SearchResults";
import Playlist from "./components/Playlist";

import './App.css';

function App() {
  const hardCodedResults = [{name: "Numb", artist: "Linkin Park", album: "meteora", id: 1},
                        {name: "Foreword", artist: "Linkin Park", album: "meteora", id: 2},
                        {name: "Hit The Floor", artist: "Linkin Park", album: "meteora", id: 3},
                        {name: "Easier to Run", artist: "Linkin Park", album: "meteora", id: 4},
                        {name: "From the Inside", artist: "Linkin Park", album: "meteora", id: 5},];

  const [results, setResults] = useState(hardCodedResults);
  const [playlistName, setPlaylistName] = useState("Metal Workout");
  const [playlistTracks, setPlaylistTracks] = useState(hardCodedResults);

  return (
    <div>
      <h1>Ja<span className="highlight">mmm</span>ing</h1>
      <div className="App">
        <SearchBar />
        <div className="App-playlist">
          <SearchResults results={results}/>
          <Playlist playlistName={playlistName} playlistTracks={playlistTracks}/>
        </div>
      </div>
    </div>
  );
}

export default App;
