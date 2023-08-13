const Search = ({ query, handleSearch }) => {
  return (
    <input
      type="text"
      value={query}
      onChange={(e) => handleSearch(e.target.value)}
    />
  );
};
 
export default Search;
