import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import BOOKS from '../constants/books-constants';
import { Book } from '../types';

const HomePage: React.FC = () => {
  const { t, i18n } = useTranslation();

  const isRTL = i18n.language === 'ar';


  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
          <div className="absolute inset-0 bg-black/20"></div>
        </div>
        
        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-purple-500/20 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-32 h-32 bg-pink-500/20 rounded-full blur-xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-1/4 w-16 h-16 bg-blue-500/20 rounded-full blur-xl animate-pulse delay-500"></div>
        
        {/* Hero Content */}
        <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
          <div className="mb-8">
            <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-md rounded-full px-6 py-3 mb-6">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-sm font-medium">
                {isRTL ? 'مجموعة الأستاذة فاطمة' : "Professor Fatima's Collection"}
              </span>
            </div>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent leading-tight">
            {t('home.title')}
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-2xl mx-auto leading-relaxed">
            {t('home.subtitle')}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link 
              to="#books"
              className="group relative px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              <span className="relative z-10">
                {isRTL ? 'استكشف الكتب' : 'Explore Books'}
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-700 to-pink-700 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </Link>
            
            <button className="px-8 py-4 border-2 border-white/30 text-white font-semibold rounded-full hover:bg-white/10 transition-all duration-300 backdrop-blur-md">
              {isRTL ? 'تعرف على المؤلف' : 'Meet the Author'}
            </button>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Books Section */}
      <section id="books" className="py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              {isRTL ? 'مجموعة الكتب' : 'Book Collection'}
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              {isRTL 
                ? 'اكتشف عالم الكلمات والعواطف من خلال مجموعة المؤلف الحصرية' 
                : 'Discover the world of words and emotions through our exclusive author collection'
              }
            </p>
          </div>

          {/* Books Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {BOOKS.map((book, index) => (
              <BookCard key={book.id} book={book} index={index} />
            ))}
          </div>
          
          {BOOKS.length === 0 && (
            <div className="text-center py-16">
              <div className="w-24 h-24 bg-gradient-to-br from-purple-100 to-pink-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-12 h-12 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <p className="text-gray-600 text-lg">
                {isRTL ? 'لا توجد كتب متاحة حالياً' : 'No books available at the moment'}
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {isRTL ? 'كتب حصرية' : 'Exclusive Books'}
              </h3>
              <p className="text-gray-600">
                {isRTL 
                  ? 'مجموعة فريدة من الكتب التي تلامس القلب والعقل' 
                  : 'Unique collection of books that touch the heart and mind'
                }
              </p>
            </div>

            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {isRTL ? 'مؤلفة موهوبة' : 'Talented Author'}
              </h3>
              <p className="text-gray-600">
                {isRTL 
                  ? 'الأستاذة فاطمة مروة، كاتبة موهوبة تنسج الكلمات ببراعة' 
                  : 'Professor Fatima Marwa, a talented writer who weaves words with skill'
                }
              </p>
            </div>

            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-red-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {isRTL ? 'عواطف عميقة' : 'Deep Emotions'}
              </h3>
              <p className="text-gray-600">
                {isRTL 
                  ? 'كتب تلامس المشاعر وتثير التأمل في الحياة' 
                  : 'Books that touch emotions and inspire reflection on life'
                }
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

interface BookCardProps {
  book: Book;
  index: number;
}

const BookCard: React.FC<BookCardProps> = ({ book, index }) => {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === 'ar';

  const title = isRTL ? book.title_ar : book.title_en;
  const description = isRTL ? book.description_ar : book.description_en;
  const author = isRTL ? book.author_ar : book.author_en;

  return (
    <div className={`group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden fade-in`} 
         style={{ animationDelay: `${index * 200}ms` }}>
      
      {/* Book Cover */}
      <div className="relative h-80 overflow-hidden">
        {book.cover_image ? (
          <img 
            src={book.cover_image} 
            alt={title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-purple-400 via-pink-500 to-red-500 flex items-center justify-center relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-pink-600/20"></div>
            <div className="relative text-center text-white p-6 z-10">
              <h3 className="text-2xl font-bold mb-2">{title}</h3>
              <p className="text-sm opacity-90">{author}</p>
            </div>
            {/* Decorative elements */}
            <div className="absolute top-4 right-4 w-8 h-8 bg-white/20 rounded-full"></div>
            <div className="absolute bottom-4 left-4 w-6 h-6 bg-white/20 rounded-full"></div>
          </div>
        )}
        
        {/* Overlay on hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        
        {/* Price badge */}
        <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1">
          <span className="text-lg font-bold text-green-600">
            ${book.price}
          </span>
        </div>
        
        {/* Availability badge */}
        <div className={`absolute top-4 right-4 px-3 py-1 rounded-full text-sm font-medium ${
          book.available 
            ? 'bg-green-500/90 text-white' 
            : 'bg-red-500/90 text-white'
        }`}>
          {book.available ? t('book.available') : t('book.outOfStock')}
        </div>
      </div>

      <div className="p-6">
        <div className="mb-4">
          <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors duration-300">
            {title}
          </h3>
          <p className="text-sm text-purple-600 font-medium mb-3">
            {t('home.aboutAuthor')}: {author}
          </p>
          <p className="text-gray-700 text-sm line-clamp-3 leading-relaxed">
            {description}
          </p>
        </div>

        <div className="flex gap-3">
          <button 
            // to={`/order/${book.id}`}
            disabled
            className={`flex-1 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold py-3 px-6 rounded-lg text-center disabled:hover:from-purple-600 disabled:hover:to-pink-600 disabled:cursor-not-allowed hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl disabled:hover:opacity-50`}
          >
            {t('home.orderNow')}
          </button>
          <Link 
            to={`/book/${book.id}`}
            className="flex-1 border-2 border-gray-300 text-gray-700 font-semibold py-3 px-6 rounded-lg text-center hover:border-purple-600 hover:text-purple-600 transition-all duration-300"
          >
            {t('home.learnMore')}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomePage;