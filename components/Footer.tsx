import React from 'react';
import { NavLink } from 'react-router-dom';
import { COMPANY_INFO } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-dark-800 text-white pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* Brand Info */}
          <div className="col-span-1 md:col-span-1">
            <h3 className="text-2xl font-bold text-primary-500 mb-4">{COMPANY_INFO.shortName}</h3>
            <p className="text-gray-400 text-sm mb-4 leading-relaxed">
              {COMPANY_INFO.description}
            </p>
            <p className="text-gray-500 text-xs italic">
              "{COMPANY_INFO.tagline}"
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-gray-200">Menu</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><NavLink to="/produk" className="hover:text-primary-400">Produk</NavLink></li>
              <li><NavLink to="/cara-pesan" className="hover:text-primary-400">Cara Pesan</NavLink></li>
              <li><NavLink to="/marketplace" className="hover:text-primary-400">Mitra Marketplace</NavLink></li>
              <li><NavLink to="/tentang" className="hover:text-primary-400">Tentang Kami</NavLink></li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-gray-200">Kategori</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><NavLink to="/produk" className="hover:text-primary-400">Kandang Ayam</NavLink></li>
              <li><NavLink to="/produk" className="hover:text-primary-400">Kandang Puyuh</NavLink></li>
              <li><NavLink to="/produk" className="hover:text-primary-400">Aviary / Burung</NavLink></li>
              <li><NavLink to="/produk" className="hover:text-primary-400">Aksesoris</NavLink></li>
            </ul>
          </div>

          {/* Contact Placeholder */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-gray-200">Hubungi Kami</h4>
            <div className="text-sm text-gray-400 space-y-2">
              <p>Senin - Sabtu: 08.00 - 17.00</p>
              <p>Minggu: Libur</p>
              <div className="pt-4">
                <a href={COMPANY_INFO.shopeeMainUrl} target="_blank" rel="noopener noreferrer" className="text-primary-400 hover:text-primary-300 underline">
                  Kunjungi Shopee Official
                </a>
              </div>
            </div>
          </div>

        </div>

        <div className="border-t border-gray-700 mt-12 pt-8 text-center text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} {COMPANY_INFO.name}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;