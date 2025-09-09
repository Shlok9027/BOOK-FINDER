import React, { useContext } from "react";
import { BookContext } from "../context/BookContext";

const SearchBar = () => {
  const { query, setQuery, fetchBooks } = useContext(BookContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchBooks(query);
  };

  return (
    <form onSubmit={handleSubmit} className="mb-12 max-w-2xl mx-auto">
      <div className="relative">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          
          // --- CHANGE HERE ---
          placeholder="What are you looking for, Alex?"
          
          className="w-full px-5 py-3 text-lg rounded-full border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-700 transition-shadow"
        />
        <button
          type="submit"
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-indigo-600 text-white px-8 py-2 rounded-full hover:bg-indigo-700 transition-colors font-semibold"
        >
          Search
        </button>
      </div>
    </form>
  );
};

export default SearchBar;
