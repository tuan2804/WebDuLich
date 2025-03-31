import React, { useState } from 'react';
import { locations } from './data/locations';
import Header from './components/Header';
import LocationCard from './components/LocationCard';
import LocationModal from './components/LocationModal';
import ContactSection from './components/ContactSection';

function App() {
  const [selectedLocation, setSelectedLocation] = useState(null);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="relative h-[60vh] bg-cover bg-center" style={{
        backgroundImage: 'url("https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=1920")'
      }}>
        <div className="absolute inset-0 bg-black bg-opacity-40" />
        <div className="relative container mx-auto px-4 h-full flex items-center justify-center">
          <div className="text-white max-w-2xl text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Khám Phá Vẻ Đẹp Gia Lai
            </h1>
            <p className="text-xl mb-8">
              Hành trình khám phá vùng đất Tây Nguyên hùng vĩ với những thác nước, 
              đồi chè và văn hóa độc đáo
            </p>
            <a 
              href="#destinations" 
              className="inline-block bg-green-600 text-white px-6 py-3 rounded-lg text-lg font-medium hover:bg-green-700 transition"
            >
              Khám phá ngay
            </a>
          </div>
        </div>
      </section>

      {/* Destinations Section */}
      <section id="destinations" className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Điểm Du Lịch Nổi Bật
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {locations.map(location => (
              <LocationCard
                key={location.id}
                location={location}
                onClick={() => setSelectedLocation(location)}
              />
            ))}
          </div>
        </div>
      </section>

      <ContactSection />

      {selectedLocation && (
        <LocationModal
          location={selectedLocation}
          onClose={() => setSelectedLocation(null)}
        />
      )}
    </div>
  );
}

export default App;