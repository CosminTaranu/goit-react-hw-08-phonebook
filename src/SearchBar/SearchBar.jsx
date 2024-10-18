import React from 'react';
import { BsSearch } from 'react-icons/bs';


const SearchBar = ({ onSearch }) => {
  return (
    <div>
      <input
        type="text"
        placeholder="Search contacts..."
        onChange={(e) => onSearch(e.target.value)}
      />
      <BsSearch />
    </div>
  );
};

export default SearchBar;
