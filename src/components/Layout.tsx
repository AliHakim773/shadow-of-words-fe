import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Link, useLocation } from 'react-router-dom';
import { toggleLanguage } from '../utils/languageUtils';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const {  i18n } = useTranslation();
  const location = useLocation();
  const isRTL = i18n.language === 'ar';
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLanguageToggle = () => {
    toggleLanguage();
  };

  return (
    <div className={`min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 ${isRTL ? 'font-arabic' : ''}`} lang={i18n.language} dir={isRTL ? 'rtl' : 'ltr'}>
      (
        <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-200/50' 
            : 'bg-white/90 backdrop-blur-md shadow-sm'
        }`}>
          <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-20">
              {/* Logo */}
              <div className="flex items-center">
                <Link to="/shadow-of-words-fe" className="flex items-center space-x-3 group">
                  <div className="w-10 h-10 bg-gradient-to-br from-purple-600 to-pink-600 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300">
                    <span className="text-white font-bold text-lg">S</span>
                  </div>
                  <div className="hidden sm:block">
                    <span className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                      {isRTL ? 'ظلّ الكلمات' : 'Shadow of Words'}
                    </span>
                    <p className="text-xs text-gray-600">
                      {isRTL ? 'مجموعة المؤلف' : 'Author Collection'}
                    </p>
                  </div>
                </Link>
              </div>
              
              {/* Navigation Links */}
              <div className="hidden md:flex items-center space-x-8 rtl:space-x-reverse">
                <Link 
                  to="/shadow-of-words-fe" 
                  className={`relative px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 group ${
                    location.pathname === '/shadow-of-words-fe' 
                      ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg' 
                      : 'text-gray-700 hover:text-purple-600'
                  }`}
                >
                  {isRTL ? "الرئيسية" : "Home"}
                  {location.pathname === '/shadow-of-words-fe' && (
                    <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full"></div>
                  )}
                </Link>
                
              
                
                <button
                  onClick={handleLanguageToggle}
                  className="px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 border-2 border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white"
                >
                  {isRTL ? "العربية" : "English"}
                </button>
              </div>

              {/* Mobile Menu Button */}
              <div className="md:hidden">
                <button className={`p-2 rounded-lg transition-all duration-300 ${
                  isScrolled 
                    ? 'text-gray-700 hover:bg-gray-100' 
                    : 'text-white hover:bg-white/10'
                }`}>
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                </button>
              </div>
            </div>
          </nav>
        </header>
      )

      <main className={ 'pt-20' }>
        {children}
      </main>

     (
        <footer className="bg-gradient-to-r from-gray-900 via-purple-900 to-gray-900 text-white mt-16">
          <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Brand Section */}
              <div className="text-center md:text-left">
                <div className="flex items-center justify-center md:justify-start space-x-3 mb-4">
                  <div className="w-8 h-8 bg-gradient-to-br from-purple-400 to-pink-400 rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-sm">S</span>
                  </div>
                  <span className="text-xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                    {isRTL ? 'ظلّ الكلمات' : 'Shadow of Words'}
                  </span>
                </div>
                <p className="text-gray-300 text-sm">
                  {isRTL ? 'اكتشف عالم الكلمات والعواطف الجميلة' : 'Discover the beautiful world of words and emotions'}
                </p>
              </div>

              {/* Quick Links */}
              <div className="text-center">
                <h3 className="text-lg font-semibold mb-4">
                  {isRTL ? 'روابط سريعة' : 'Quick Links'}
                </h3>
                <div className="space-y-2">
                  <Link to="/shadow-of-words-fe" className="block text-gray-300 hover:text-white transition-colors duration-200">
                    {isRTL ? "الرئيسية" : "Home"}
                  </Link>
                </div>
              </div>

              {/* Contact Info */}
              <div className="text-center md:text-right">
                <h3 className="text-lg font-semibold mb-4">
                  {isRTL ? 'معلومات التواصل' : 'Contact Info'}
                </h3>
                <div className="space-y-2 text-gray-300">
                  <p className="text-sm">
                    {isRTL ? 'الأستاذة فاطمة مروة' : 'Professor Fatima Marwa'}
                  </p>
                  <p className="text-sm">
                    {isRTL ? 'كاتبة ومؤلفة' : 'Author & Writer'}
                  </p>
                </div>
              </div>
            </div>

            {/* Copyright */}
            <div className="border-t border-gray-700 mt-8 pt-8 text-center">
              <p className="text-gray-400 text-sm">
                {isRTL ? '© 2024 الأستاذة فاطمة مروة. جميع الحقوق محفوظة.' : '© 2024 Professor Fatima Marwa. All rights reserved.'}
              </p>
            </div>
          </div>
        </footer>
      )
    </div>
  );
};

export default Layout;