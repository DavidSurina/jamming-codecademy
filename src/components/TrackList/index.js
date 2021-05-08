import Track from "./Track";

import './style.css';

export default function TrackList(results) {
  const renderedResults = results.map((track) => {
    return <Track trackInfo={track}/>;
  })

  return <div className="TrackList">{renderedResults}</div>;
}
