import './style.css';

export default function Track({trackInfo, onAdd, isRemoval}) {
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

  return (
    <div className="Track" key={id}>
      <div className="Track-information">
        <h3>{name}</h3>
        <p>{`${artist} | ${album}`}</p>
      </div>
      <button className="Track-action" onClick={addTrack}>{renderAction()}</button>
    </div>
  );
}
