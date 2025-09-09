import React from "react";

const BookCard = ({ book }) => {
  // FIX: Switched to a more reliable placeholder image service
  const coverUrl = book.cover_id
    ? `https://covers.openlibrary.org/b/id/${book.cover_id}-M.jpg`
    : "https://placehold.co/180x280?text=No+Cover";

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:-translate-y-2 transition-transform duration-500 ease-in-out group">
      <div className="w-full h-64 bg-gray-200 flex items-center justify-center">
        <img
          src={coverUrl}
          alt={`Cover for ${book.title}`}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-4">
        <h3 className="font-bold text-md truncate" title={book.title}>
          {book.title}
        </h3>
        <p className="text-gray-600 text-sm mt-1 truncate">{book.author}</p>
        {book.first_publish_year && (
          <p className="text-gray-500 text-xs mt-2">
            First Published: {book.first_publish_year}
          </p>
        )}
      </div>
    </div>
  );
};

export default BookCard;
