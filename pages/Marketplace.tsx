import React from 'react';
import { PARTNERS, COMPANY_INFO } from '../constants';
import { ExternalLink, Lock } from 'lucide-react';

const MarketplacePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Mitra Marketplace</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Kami hadir di berbagai platform e-commerce dan pengadaan pemerintah untuk memudahkan transaksi Anda di mana saja.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PARTNERS.map((partner) => (
            <div key={partner.name} className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden flex flex-col">
              <div className="p-6 flex-grow">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold text-gray-900">{partner.logoText}</h3>
                  <span className={`px-2 py-1 rounded text-xs font-semibold ${
                    partner.type === 'Procurement' ? 'bg-blue-100 text-blue-700' : 'bg-orange-100 text-orange-700'
                  }`}>
                    {partner.type}
                  </span>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed mb-6">
                  {partner.description}
                </p>
              </div>
              
              <div className="p-4 bg-gray-50 border-t border-gray-100">
                {partner.isAvailable && partner.url ? (
                  <a 
                    href={partner.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-full px-4 py-2 bg-primary-500 text-white rounded-lg font-medium hover:bg-primary-600 transition-colors gap-2"
                  >
                    <span>Kunjungi Toko</span>
                    <ExternalLink size={16} />
                  </a>
                ) : (
                  <button 
                    disabled 
                    className="flex items-center justify-center w-full px-4 py-2 bg-gray-200 text-gray-500 rounded-lg font-medium cursor-not-allowed gap-2"
                  >
                    <span>Link Menyusul</span>
                    <Lock size={16} />
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-white p-8 rounded-xl border border-gray-200 text-center">
          <h2 className="text-xl font-bold mb-4">Butuh Penawaran Khusus / B2B?</h2>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Untuk pengadaan proyek, desa, atau sekolah dalam jumlah besar, silakan hubungi tim kami untuk asistensi melalui jalur pengadaan resmi (LKPP/SIPLah) atau faktur langsung.
          </p>
          <a 
            href={`https://wa.me/${COMPANY_INFO.whatsapp}`} 
            className="inline-block text-primary-600 font-bold hover:underline"
          >
            Hubungi Admin via WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
};

export default MarketplacePage;