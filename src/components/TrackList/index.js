import Track from '../Track';

import './style.css';

export default function TrackList({ tracks, onAdd, isRemoval, onRemove }) {
  console.log(tracks);

  return (
    <div className="TrackList">
      {
        tracks.map((track)=> {
          //console.log(track);
          return <Track trackInfo={track} onAdd={onAdd} isRemoval={isRemoval} onRemove={onRemove}/>
        })
      }
    </div>
  );
}
