import TrackList from "./TrackList";

import './style.css';

export default function Playlist(playlistName, playlistTracks) {
  return (
    <div className="Playlist">
      <input value="New Playlist" />
      <TrackList tracks={playlistTracks}/>
      <button className="Playlist-save">SAVE TO SPOTIFY</button>
    </div>
  );
}
