import Track from "./Track";

import './style.css';

export default function TrackList(tracks) {
  const renderedTracks = tracks.map((track) => {
    return <Track trackInfo={track}/>;
  })

  return <div className="TrackList">{renderedTracks}</div>;
}
