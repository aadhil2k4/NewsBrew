import React, { useState } from 'react';

const Search = ({onSearchChange}) => {
  const [input, setInput] = useState('');

  const handleInputChange = (event) => {
    setInput(event.target.value);
    onSearchChange(event.target.value)
  };

  return (
    <div>
      <form className="d-flex input-group w-auto my-auto mb-3 mb-md-0">
        <input
          autoComplete="off"
          type="search"
          className="form-control rounded"
          placeholder="Search"
          value={input}
          onChange={handleInputChange}
        />
      </form>
    </div>
  );
};

export default Search;
