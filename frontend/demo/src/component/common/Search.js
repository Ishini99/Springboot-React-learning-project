import React from "react";

const Search = ({ search, setSearch }) => {
  const handleInputChange = (e) => {
    setSearch(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can add any additional logic here if needed
  };

  return (
    <div className="col-sm-6 mb-4">
      <form onSubmit={handleSubmit}>
        <input
          className="form-control"
          type="search"
          role="searchbox"
          placeholder="Search students..."
          value={search}
          onChange={handleInputChange}
        />
      </form>
    </div>
  );
};

export default Search;
