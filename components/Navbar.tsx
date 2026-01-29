import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X, ShoppingCart } from 'lucide-react';
import { COMPANY_INFO } from '../constants';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Tentang', path: '/tentang' },
    { name: 'Produk', path: '/produk' },
    { name: 'Cara Pesan', path: '/cara-pesan' },
    { name: 'Marketplace', path: '/marketplace' },
    { name: 'Kontak', path: '/kontak' },
  ];

  const activeClass = "text-primary-600 font-semibold";
  const inactiveClass = "text-gray-600 hover:text-primary-500 transition-colors";

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <NavLink to="/" className="flex items-center gap-2">
              <span className="text-2xl font-extrabold text-primary-600 tracking-tight">LAQUILA</span>
              <span className="hidden md:block text-xs font-medium text-gray-500 bg-gray-100 px-2 py-1 rounded">Workshop</span>
            </NavLink>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                className={({ isActive }) => isActive ? activeClass : inactiveClass}
              >
                {item.name}
              </NavLink>
            ))}
            <a
              href={COMPANY_INFO.shopeeMainUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary-500 text-white px-4 py-2 rounded-full font-medium hover:bg-primary-600 transition-colors flex items-center gap-2 shadow-sm"
            >
              <ShoppingCart size={16} />
              <span>Shop</span>
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `block px-3 py-2 rounded-md text-base font-medium ${
                    isActive ? 'bg-primary-50 text-primary-600' : 'text-gray-700 hover:bg-gray-50'
                  }`
                }
              >
                {item.name}
              </NavLink>
            ))}
            <a
              href={COMPANY_INFO.shopeeMainUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full text-center mt-4 bg-primary-500 text-white px-4 py-3 rounded-lg font-bold"
            >
              Beli di Shopee
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;