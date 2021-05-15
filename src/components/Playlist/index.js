import TrackList from "../TrackList";

import "./style.css";

export default function Playlist({playlistName, setPlaylistName, playlistTracks, onRemove, onSave}) {
  return (
    <div className="Playlist">
      <input value={playlistName} onChange={(e) => setPlaylistName(e.target.value)}/>
      <TrackList tracks={playlistTracks} isRemoval={true} onRemove={onRemove}/>
      <button className="Playlist-save">SAVE TO SPOTIFY</button>
    </div>
  );
}
