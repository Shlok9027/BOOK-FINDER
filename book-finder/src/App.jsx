import React from 'react';
import SearchBar from './components/SearchBar';
import BookList from './components/BookList';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <div className='min-h-screen bg-gray-100 text-gray-800 font-sans'>
        <header className='text-center py-10 bg-white shadow-md mb-8'>
          <h1 className='text-5xl font-extrabold text-indigo-600 tracking-tight'>Book Finder</h1>
          
          {/* --- CHANGE HERE --- */}
          <p className='text-gray-500 mt-2 text-lg'>
            Ready to find a new book, Alex?
          </p>

        </header>
        <main className='container mx-auto px-4 md:px-8'>
          <SearchBar />
          <BookList />
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
