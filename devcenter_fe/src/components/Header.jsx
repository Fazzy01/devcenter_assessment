import React, { useState } from 'react';
import Button from '../shared/Button';
import { Link } from 'react-router-dom';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
      <div className="container mx-auto px-4 py-2">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <div className="text-2xl font-bold">Logo</div>
            <nav className="hidden md:block" aria-label="Main Navigation">
              <ul className="flex space-x-4">
                <li>
                  <a href="#about" className="text-gray-600 hover:text-gray-900">
                    About
                  </a>
                </li>
                <li>
                  <a href="#how-it-works" className="text-gray-600 hover:text-gray-900">
                    How it works
                  </a>
                </li>
              </ul>
            </nav>
          </div>
          <div className="flex items-center space-x-4">
            <div className="hidden md:block">
                <Link to='/register'>

                    <Button
                        text="Register"
                        width="w-full md:w-auto"
                        padding="py-[0.6rem] px-[2rem]"
                        />
                </Link>
            </div>
            <div className="hidden md:block">
            <Link to='/login'>
                <Button
                  text="Login"
                  bgColor= 'bg-white text-green-600 border border-green-600'
                  width="w-full md:w-auto"
                  padding="py-[0.6rem] px-[1.4rem]"
                />
            </Link>
            </div>
            <button
              className="md:hidden"
              onClick={toggleMenu}
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
        {isMenuOpen && (
          <nav className="md:hidden mt-4" aria-label="Mobile Navigation">
            <ul className="flex flex-col space-y-2">
              <li>
                <a href="#about" className="block text-gray-600 hover:text-gray-900 py-2">
                  About
                </a>
              </li>
              <li>
                <a href="#how-it-works" className="block text-gray-600 hover:text-gray-900 py-2">
                  How it works
                </a>
              </li>
              <li>
                <Button
                to='/register'
                  text="Register"
                  width="w-full md:w-auto"
                  padding="py-[0.6rem] px-[2rem]"
                />
              </li>
              <li>
                <Button
                  to='/login'
                  text="Login"
                  bgColor= 'bg-white text-green-600 border border-green-600'
                  width="w-full md:w-auto"
                  padding="py-[0.6rem] px-[1.4rem]"
                />
              </li>
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
}

export default Header;