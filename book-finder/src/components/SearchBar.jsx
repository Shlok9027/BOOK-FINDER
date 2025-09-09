import React, { useContext } from "react";
import { BookContext } from "../context/BookContext";

const SearchBar = () => {
  const { query, setQuery, fetchBooks } = useContext(BookContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchBooks(query);
  };

  return (
    <form onSubmit={handleSubmit} className="mb-12 max-w-3xl mx-auto">
      <div className="relative">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="🔍 What are you looking for, Alex?"
          className="w-full px-6 py-4 text-lg rounded-full border-2 border-transparent bg-white/80 backdrop-blur-md shadow-md focus:outline-none focus:ring-4 focus:ring-indigo-400 transition-all duration-300"
        />
        <button
          type="submit"
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-8 py-2 rounded-full font-semibold hover:scale-105 transition-transform shadow-lg"
        >
          Search
        </button>
      </div>
    </form>
  );
};

export default SearchBar;
