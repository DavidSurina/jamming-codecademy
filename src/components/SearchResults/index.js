import TrackList from "./TrackList";

import "./style.css";

export default function SearchResults(results) {
  return (
    <div className="SearchResults">
      <h2>Results</h2>
      <TrackList results={results}/>
    </div>
  );
}
