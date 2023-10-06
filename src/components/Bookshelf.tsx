import React from 'react';

const Bookshelf: React.FC = () => {
  const books = [
    { src: './images/book1.jpg', alt: 'Book 1' },
    { src: './images/book2.jpg', alt: 'Book 2' },
    { src: './images/book3.jpg', alt: 'Book 3' },
    { src: './images/book4.jpg', alt: 'Book 4' },
    { src: './images/book5.jpg', alt: 'Book 5' },
    { src: './images/book6.jpg', alt: 'Book 6' },
  ];

  return (
    <div className="bg-gray-100 py-12 bg-opacity-50 h-full">
      <h1 className="text-2xl text-black font-semibold text-center mb-8 ">📖 My 2023 Favs</h1>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {books.map((book, index) => (
            <div key={index} className="flex justify-center items-center rounded-lg overflow-hidden shadow-lg bg-center h-50">
              <img src={book.src} alt={book.alt} className="w-40 h-50" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Bookshelf;
