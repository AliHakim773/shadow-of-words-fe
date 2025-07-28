import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link, useParams } from 'react-router-dom';
import BOOKS from '../constants/books-constants';
import { Book } from '../types';

const BookDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { i18n } = useTranslation();
  const [book, setBook] = useState<Book | null>(null);
  const [loading, setLoading] = useState(true);
  const isRTL = i18n.language === 'ar';

  useEffect(() => {
    if (id) {
      loadBook(id);
    }
  }, [id]);

  const loadBook = async (bookId: string) => {
    setBook(BOOKS.find(book => book.id === bookId) || null);
    setLoading(false);
  };

  if (loading) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex items-center justify-center min-h-96">
          <div className="spinner"></div>
          <span className="ml-3">{isRTL ? "جاري التحميل" : "Loading..."}</span>
        </div>
      </div>
    );
  }

  if (!book) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            {isRTL ? 'الكتاب غير موجود' : 'Book not found'}
          </h2>
          <Link to="/" className="btn btn-primary">
            {isRTL ? "الرئيسية" : "Home"}
          </Link>
        </div>
      </div>
    );
  }

  const title = isRTL ? book.title_ar : book.title_en;
  const description = isRTL ? book.description_ar : book.description_en;
  const author = isRTL ? book.author_ar : book.author_en;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        
        {/* Book Cover */}
        <div className="flex justify-center">
          <div className="w-full max-w-md">
            {book.cover_image ? (
              <img 
                src={book.cover_image} 
                alt={title}
                className="w-full rounded-xl shadow-2xl"
              />
            ) : (
              <div className="w-full aspect-[3/4] bg-gradient-to-br from-purple-400 via-pink-500 to-red-500 rounded-xl shadow-2xl flex items-center justify-center">
                <div className="text-center text-white p-8">
                  <h3 className="text-3xl font-bold mb-4">{title}</h3>
                  <p className="text-lg opacity-90">{author}</p>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Book Info */}
        <div className="flex flex-col justify-center">
          <div className="mb-6">
            <Link to="/" className="text-blue-600 hover:text-blue-800 mb-4 inline-block">
              ← {isRTL ? "الرئيسية" : "Home"}
            </Link>
          </div>

          <h1 className="text-4xl font-bold text-gray-900 mb-4 fade-in">
            {title}
          </h1>
          
          <p className="text-xl text-gray-600 mb-6 fade-in">
            {isRTL ? "عن المؤلف" : "About the Author"}: {author}
          </p>

          <div className="prose prose-lg max-w-none mb-8 fade-in">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              {isRTL ? "عن الكتاب" : "About the Book"}
            </h3>
            <p className="text-gray-700 leading-relaxed whitespace-pre-line">
              {description}
            </p>
          </div>

          <div className="flex items-center justify-between mb-8 p-6 bg-gray-50 rounded-xl">
            <div>
              <span className="text-sm text-gray-600 block mb-1">{isRTL ? "السعر" : "Price"}</span>
              <span className="text-3xl font-bold text-green-600">
                {isRTL ? "د.ك" : "$"}{book.price}
              </span>
            </div>
            <div className={`px-4 py-2 rounded-full font-medium ${
              book.available 
                ? 'bg-green-100 text-green-800' 
                : 'bg-red-100 text-red-800'
            }`}>
              {book.available ? isRTL ? "متوفر" : "Available" : isRTL ? "غير متوفر" : "Out of Stock"}
            </div>
          </div>

          {book.available && (
            <div className="flex gap-4">
              <button 
                disabled
               
                className="btn btn-primary flex-1 text-center text-lg py-4 disabled:cursor-not-allowed disabled:hover:bg-purple-600 disabled:hover:to-pink-600 disabled:hover:opacity-50"
              >
                {isRTL ? "اطلب الآن" : "Order Now"}
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default BookDetails;