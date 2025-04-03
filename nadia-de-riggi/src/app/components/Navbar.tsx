'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Bars3Icon, XMarkIcon, GlobeAltIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);
  const [currentLanguage, setCurrentLanguage] = useState('en');

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault();
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  const handleLanguageChange = (language: string) => {
    setCurrentLanguage(language);
    setIsLanguageOpen(false);
  };

  const navigation = [
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 w-[95%] max-w-7xl mx-auto bg-white/80 backdrop-blur-md z-50 px-6 py-3 rounded-2xl shadow-lg">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Image
            src="https://images.unsplash.com/photo-1611532736637-13a8bdf96127?w=32&h=32&fit=crop&auto=format&q=80"
            alt="Nadia De Riggi"
            width={32}
            height={32}
            className="w-8 h-8 rounded-lg"
          />
          <span className="text-xl font-bold">Nadia De Riggi</span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-1">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={(e) => scrollToSection(e, item.href)}
              className="px-4 py-2 text-gray-600 hover:text-gray-900 rounded-full hover:bg-gray-100 transition-colors"
            >
              {item.name}
            </a>
          ))}
          <div className="relative ml-4">
            <button
              onClick={() => setIsLanguageOpen(!isLanguageOpen)}
              className="flex items-center space-x-1 px-4 py-2 text-gray-600 hover:text-gray-900 rounded-full hover:bg-gray-100 transition-colors"
            >
              <GlobeAltIcon className="h-5 w-5" />
              <span>{currentLanguage === 'en' ? 'EN' : 'FR'}</span>
            </button>
            {isLanguageOpen && (
              <div className="absolute right-0 mt-2 py-2 w-48 bg-white rounded-xl shadow-lg ring-1 ring-black ring-opacity-5">
                <a
                  href="#"
                  onClick={() => handleLanguageChange('en')}
                  className={`block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 ${
                    currentLanguage === 'en' ? 'bg-gray-50' : ''
                  }`}
                >
                  English
                </a>
                <a
                  href="#"
                  onClick={() => handleLanguageChange('fr')}
                  className={`block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 ${
                    currentLanguage === 'fr' ? 'bg-gray-50' : ''
                  }`}
                >
                  Français
                </a>
              </div>
            )}
          </div>
        </div>

        {/* Mobile Navigation Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
        >
          {isOpen ? (
            <XMarkIcon className="h-6 w-6" />
          ) : (
            <Bars3Icon className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden mt-4"
          >
            <div className="flex flex-col space-y-2">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => {
                    scrollToSection(e, item.href);
                    setIsOpen(false);
                  }}
                  className="px-4 py-2 text-gray-600 hover:text-gray-900 rounded-full hover:bg-gray-100 transition-colors"
                >
                  {item.name}
                </a>
              ))}
              <div className="border-t border-gray-200 my-2 pt-2">
                <button
                  onClick={() => setIsLanguageOpen(!isLanguageOpen)}
                  className="w-full flex items-center justify-between px-4 py-2 text-gray-600 hover:text-gray-900 rounded-full hover:bg-gray-100 transition-colors"
                >
                  <span className="flex items-center space-x-2">
                    <GlobeAltIcon className="h-5 w-5" />
                    <span>Language</span>
                  </span>
                  <span>{currentLanguage === 'en' ? 'English' : 'Français'}</span>
                </button>
                {isLanguageOpen && (
                  <div className="mt-2 py-2 bg-gray-50 rounded-xl">
                    <a
                      href="#"
                      onClick={() => handleLanguageChange('en')}
                      className={`block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 ${
                        currentLanguage === 'en' ? 'bg-gray-100' : ''
                      }`}
                    >
                      English
                    </a>
                    <a
                      href="#"
                      onClick={() => handleLanguageChange('fr')}
                      className={`block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 ${
                        currentLanguage === 'fr' ? 'bg-gray-100' : ''
                      }`}
                    >
                      Français
                    </a>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
} 