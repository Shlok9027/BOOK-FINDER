import React, { useContext } from 'react';
import { BookContext } from '../context/BookContext';
import BookCard from './BookCard';

const BookList = () => {
    const { books, loading, error } = useContext(BookContext);

    if (loading) {
        return (
            <div className='flex justify-center items-center p-12'>
                {/* FIX: Corrected 'animation-spin' to 'animate-spin' */}
                <div className='w-16 h-16 border-4 border-dashed rounded-full animate-spin border-indigo-900'></div>
            </div>
        );
    }

    if (error) {
        return <p className='text-center text-xl text-red-500 font-semibold'>{error}</p>;
    }
    
    if (!loading && books.length === 0) {
        return <p className='text-center text-xl text-gray-400'>No books found. Try another search.</p>;
    }

    return (
        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8'>
            {/* FIX: Added a 'return' statement to render the component */}
            {books.map((book) => {
                return <BookCard key={book.id} book={book} />;
            })}
        </div>
    );
};

export default BookList;
