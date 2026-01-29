import React from 'react';
import { Mail, MapPin, MessageCircle } from 'lucide-react';
import { COMPANY_INFO } from '../constants';

const ContactPage: React.FC = () => {
  return (
    <div className="bg-white min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-center text-gray-900 mb-12">Hubungi Kami</h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Contact Info */}
          <div>
            <div className="bg-gray-50 p-8 rounded-2xl">
              <h3 className="text-xl font-bold mb-6 text-gray-900">Informasi Kontak</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="p-3 bg-white rounded-lg shadow-sm text-primary-500 mr-4">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-gray-900">Workshop & Kantor</p>
                    <p className="text-gray-600 mt-1">{COMPANY_INFO.address}</p>
                  </div>
                </div>

                <div className="flex items-start">
                   <div className="p-3 bg-white rounded-lg shadow-sm text-primary-500 mr-4">
                    <MessageCircle size={20} />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-gray-900">WhatsApp / Telepon</p>
                    <p className="text-gray-600 mt-1">{COMPANY_INFO.whatsapp ? `+${COMPANY_INFO.whatsapp}` : "Belum ditemukan"}</p>
                  </div>
                </div>

                <div className="flex items-start">
                   <div className="p-3 bg-white rounded-lg shadow-sm text-primary-500 mr-4">
                    <Mail size={20} />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-gray-900">Email</p>
                    <p className="text-gray-600 mt-1">{COMPANY_INFO.email}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8">
               <h3 className="text-lg font-bold mb-4">Jam Operasional</h3>
               <ul className="space-y-2 text-gray-600 text-sm">
                 <li className="flex justify-between border-b border-gray-100 pb-2">
                   <span>Senin - Jumat</span>
                   <span>08:00 - 17:00</span>
                 </li>
                 <li className="flex justify-between border-b border-gray-100 pb-2">
                   <span>Sabtu</span>
                   <span>08:00 - 15:00</span>
                 </li>
                 <li className="flex justify-between text-red-500">
                   <span>Minggu</span>
                   <span>Tutup</span>
                 </li>
               </ul>
            </div>
          </div>

          {/* Form */}
          <div>
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Nama Lengkap</label>
                <input 
                  type="text" 
                  id="name"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-all"
                  placeholder="Nama Anda"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email / WhatsApp</label>
                <input 
                  type="text" 
                  id="email"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-all"
                  placeholder="Contoh: 0812..."
                />
              </div>

              <div>
                <label htmlFor="topic" className="block text-sm font-medium text-gray-700 mb-1">Topik</label>
                <select 
                  id="topic"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-all bg-white"
                >
                  <option>Pertanyaan Produk</option>
                  <option>Status Pesanan</option>
                  <option>Penawaran Kerjasama / Reseller</option>
                  <option>Lainnya</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Pesan</label>
                <textarea 
                  id="message"
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-all"
                  placeholder="Tulis pesan Anda di sini..."
                ></textarea>
              </div>

              <button 
                type="submit"
                className="w-full bg-primary-600 text-white font-bold py-3 rounded-lg hover:bg-primary-700 transition-colors shadow-md"
              >
                Kirim Pesan
              </button>
              
              <p className="text-xs text-gray-400 text-center mt-4">
                *Form ini adalah simulasi. Untuk respon cepat, silakan hubungi kami via Shopee Chat.
              </p>
            </form>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ContactPage;