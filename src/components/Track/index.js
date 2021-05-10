import './style.css';

export default function Track({trackInfo, onAdd, isRemoval, onRemove}) {
  const {name, artist, album, id} = trackInfo;

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
    <div className="Track" key={id}>
      <div className="Track-information">
        <h3>{name}</h3>
        <p>{`${artist} | ${album}`}</p>
      </div>
      <button className="Track-action" onClick={isRemoval ? removeTrack : addTrack}>{renderAction()}</button>
    </div>
  );
}
