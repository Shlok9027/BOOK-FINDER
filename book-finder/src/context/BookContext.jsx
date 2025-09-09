import React, { createContext, useState, useEffect } from "react";

export const BookContext = createContext();

const BookContextProvider = (props) => {
    const [books, setBooks] = useState([]);
    const [query, setQuery] = useState("the lord of the rings");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const fetchBooks = async (searchQuery) => {
        // FIX: Only search if the query is at least 3 characters long
        if (!searchQuery || searchQuery.trim().length < 3) {
            setBooks([]); // Clear books if query is too short
            return;
        }

        setLoading(true);
        setError(null);
        setBooks([]);

        try {
            const response = await fetch(
                `https://openlibrary.org/search.json?q=${encodeURIComponent(searchQuery)}&limit=20`
            );

            if (!response.ok) {
                // If the server returns an error (like 500), we catch it here
                throw new Error(`Server error: ${response.status}. Please try a different search.`);
            }
            const data = await response.json();

            const formattedBooks = data.docs.map((book) => ({
                id: book.key,
                title: book.title,
                author: book.author_name ? book.author_name.join(", ") : "Unknown Author",
                cover_id: book.cover_i,
                first_publish_year: book.first_publish_year,
            }));

            setBooks(formattedBooks);
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchBooks(query);
    }, []);

    const contextValue = {
        books,
        loading,
        error,
        query,
        setQuery,
        fetchBooks,
    };

    return (
        <BookContext.Provider value={contextValue}>
            {props.children}
        </BookContext.Provider>
    );
};

export default BookContextProvider;
