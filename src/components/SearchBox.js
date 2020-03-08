import React from 'react';

const SearchBox = ({ onQuery }) => {
  return (
    <div className="pa">
      <input
        className="pa2 ba b--green bg-lightest-blue input"
        type="search"
        placeholder="search cats"
        onChange={onQuery}
      />
    </div>
  );
};
export default SearchBox;
