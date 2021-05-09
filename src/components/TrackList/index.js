import Track from '../Track';

import './style.css';

export default function TrackList({ tracks }) {
  console.log(tracks);

  return (
    <div className="TrackList">
      {
        tracks.map((track)=> {
          return <Track trackInfo={track} />
        })
      }
    </div>
  );
}
