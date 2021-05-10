import TrackList from "../TrackList";

import "./style.css";

export default function Playlist({playlistName, playlistTracks, onRemove}) {
  return (
    <div className="Playlist">
      <input value="New Playlist" />
      <TrackList tracks={playlistTracks} isRemoval={true} onRemove={onRemove}/>
      <button className="Playlist-save">SAVE TO SPOTIFY</button>
    </div>
  );
}
