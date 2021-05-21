import './style.css';

export default function Track({trackInfo, onAdd, isRemoval, onRemove}) {
  console.log(trackInfo);
  const renderAction = () => {
    if(isRemoval) {
      return "-";
    } else {
      return "+";
    }
  };

  const addTrack = () => {
    onAdd(trackInfo);
  };

  const removeTrack = () => {
    onRemove(trackInfo);
  }

  return (
    <div className="Track" key={trackInfo.id}>
      <div className="Track-information">
        <h3>{trackInfo.name}</h3>
        <p>{`${trackInfo.artists[0].name} | ${trackInfo.album.name}`}</p>
      </div>
      <button className="Track-action" onClick={isRemoval ? removeTrack : addTrack}>{renderAction()}</button>
    </div>
  );
}
