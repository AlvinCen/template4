import React from 'react';
import { COMPANY_INFO, TIMELINE_DATA, FIGHTER_BRANDS } from '../constants';
import { Target, Users, Zap } from 'lucide-react';

const AboutPage: React.FC = () => {
  return (
    <div>
      {/* Header */}
      <section className="bg-dark-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold mb-4">Tentang Kami</h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Mengenal lebih dekat {COMPANY_INFO.name}, partner terpercaya kebutuhan kandang hewan Anda.
          </p>
        </div>
      </section>

      {/* Profile & Vision */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg mx-auto text-gray-600">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Profil Perusahaan</h2>
            <p className="mb-6">
              {COMPANY_INFO.name} adalah perusahaan manufaktur (workshop) yang bergerak di bidang fabrikasi kandang hewan. 
              Dipimpin oleh <strong>{COMPANY_INFO.ceo}</strong>, kami berdedikasi untuk menciptakan produk yang tidak hanya 
              kokoh secara struktur, tetapi juga fungsional bagi peternak dan nyaman bagi hewan.
            </p>
            <p className="mb-10">
              Visi kami adalah tumbuh bersama peternak dan pecinta hewan di Indonesia dengan menyediakan solusi kandang 
              yang adaptif, inovatif, dan berkualitas tinggi berdasarkan masukan nyata dari pelanggan.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <div className="p-6 bg-orange-50 rounded-xl text-center">
              <div className="w-12 h-12 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target size={24} />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Fokus Kualitas</h3>
              <p className="text-sm">Standar material galvanis terbaik.</p>
            </div>
            <div className="p-6 bg-orange-50 rounded-xl text-center">
              <div className="w-12 h-12 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users size={24} />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Customer Centric</h3>
              <p className="text-sm">Inovasi dari feedback peternak.</p>
            </div>
            <div className="p-6 bg-orange-50 rounded-xl text-center">
              <div className="w-12 h-12 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap size={24} />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Inovatif</h3>
              <p className="text-sm">Selalu adaptif terhadap jaman.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Perjalanan Kami</h2>
          <div className="relative">
            {/* Vertical Line */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gray-200"></div>
            
            <div className="space-y-12">
              {TIMELINE_DATA.map((event, index) => (
                <div key={index} className={`relative flex items-center justify-between md:flex-row flex-col ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                  <div className="hidden md:block w-5/12"></div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-8 h-8 rounded-full bg-primary-500 border-4 border-white shadow-sm flex items-center justify-center z-10">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <div className="w-full md:w-5/12 bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                    <span className="inline-block px-3 py-1 bg-primary-100 text-primary-700 text-sm font-bold rounded-full mb-2">
                      {event.year}
                    </span>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{event.title}</h3>
                    <p className="text-gray-600 text-sm">{event.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Fighter Brands */}
      <section className="py-16 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Brand Kami</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {FIGHTER_BRANDS.map((brand, idx) => (
              <div key={idx} className="bg-white border border-gray-200 rounded-xl p-8 hover:shadow-lg transition-shadow text-center">
                <h3 className="text-2xl font-black text-gray-800 mb-2">{brand.name}</h3>
                <div className="inline-block px-3 py-1 bg-gray-100 text-gray-600 text-xs uppercase tracking-wide font-bold rounded mb-4">
                  {brand.role}
                </div>
                <p className="text-gray-600 leading-relaxed">
                  {brand.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;