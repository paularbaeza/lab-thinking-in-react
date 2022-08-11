import { useState } from 'react';

function SearchBar(props) {
  const { filterSearch } = props;
  const [search, setSearch] = useState('');

  const handleSearch = (event) => {
    let searchValue = event.target.value;
    setSearch(searchValue);
    //console.log(searchValue)
    filterSearch(searchValue);
  };

  return (
    <div>
      <form>
        <label htmlFor="search">Search</label>
        <input
          value={search}
          type="text"
          name="search"
          onChange={handleSearch}
        />
      </form>
    </div>
  );
}

export default SearchBar;
