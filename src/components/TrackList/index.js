import Track from '../Track';

import './style.css';

export default function TrackList({ tracks, onAdd, isRemoval }) {
  console.log(tracks);

  return (
    <div className="TrackList">
      {
        tracks.map((track)=> {
          return <Track trackInfo={track} onAdd={onAdd} isRemoval={isRemoval}/>
        })
      }
    </div>
  );
}
