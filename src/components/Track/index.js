import './style.css';

export default function Track({trackInfo}) {
  const {name, artist, album, id} = trackInfo;

  return (
    <div className="Track" key={id}>
      <div className="Track-information">
        <h3>{name}</h3>
        <p>{`${artist} | ${album}`}</p>
      </div>
      <button className="Track-action"></button>
    </div>
  );
}
