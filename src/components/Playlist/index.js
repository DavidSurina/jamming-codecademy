import TrackList from "../TrackList";

import "./style.css";

export default function Playlist({playlistName, playlistTracks}) {
  return (
    <div className="Playlist">
      <input value="New Playlist" />
      <TrackList tracks={playlistTracks} isRemoval={true}/>
      <button className="Playlist-save">SAVE TO SPOTIFY</button>
    </div>
  );
}
