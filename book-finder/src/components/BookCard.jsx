import React from "react";

const BookCard = ({ book }) => {
  const coverUrl = book.cover_id
    ? `https://covers.openlibrary.org/b/id/${book.cover_id}-M.jpg`
    : "https://placehold.co/180x280?text=No+Cover";

  return (
    <div className="bg-white/80 backdrop-blur-md rounded-2xl shadow-lg overflow-hidden transform hover:-translate-y-3 hover:shadow-2xl transition-all duration-500 ease-in-out group border border-gray-100">
      <div className="w-full h-64 bg-gradient-to-br from-indigo-100 to-indigo-200 flex items-center justify-center">
        <img
          src={coverUrl}
          alt={`Cover for ${book.title}`}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>
      <div className="p-5">
        <h3
          className="font-bold text-lg truncate text-indigo-700 group-hover:text-indigo-900 transition-colors"
          title={book.title}
        >
          {book.title}
        </h3>
        <p className="text-gray-600 text-sm mt-1 truncate italic">{book.author}</p>
        {book.first_publish_year && (
          <p className="text-gray-500 text-xs mt-3">
            📖 First Published: {book.first_publish_year}
          </p>
        )}
      </div>
    </div>
  );
};

export default BookCard;
