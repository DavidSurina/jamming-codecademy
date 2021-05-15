import './style.css';

export default function SearchBar({ onSearch, searchTerm, setSearchTerm }) {
  return (
    <div className="SearchBar">
      <input
        placeholder="Enter A Song, Album, or Artist"
        onChange={(e) => {
          e.preventDefault();
          setSearchTerm(e.target.value);
        }}
      />
      <button
        className="SearchButton"
        onClick={() => {
          console.log('ive been clicked');
          onSearch(searchTerm);
        }}>
        SEARCH
      </button>
    </div>
  );
}
