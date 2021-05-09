import TrackList from "../TrackList";

import "./style.css";

export default function SearchResults({results, onAdd}) {
  return (
    <div className="SearchResults">
      <h2>Results</h2>
      <TrackList tracks={results} onAdd={onAdd} isRemoval={false}/>
    </div>
  );
}
