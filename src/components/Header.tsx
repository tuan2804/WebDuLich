import React from 'react';
import { Menu, Phone, Mail, MapPin } from 'lucide-react';

export default function Header() {
  return (
    <header className="bg-green-800 text-white">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2">
            <MapPin className="w-6 h-6" />
            <span className="font-semibold text-xl">Du Lịch Gia Lai</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-6">
            <a href="#destinations" className="hover:text-green-200">Điểm Du Lịch</a>
            <a href="#contact" className="hover:text-green-200">Liên Hệ</a>
          </div>

          <div className="md:hidden">
            <button className="p-2">
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>

      <div className="bg-green-900 py-2">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center md:justify-end gap-4 text-sm">
            <div className="flex items-center space-x-2">
              <Phone className="w-4 h-4" />
              <span>0269 3824 888</span>
            </div>
            <div className="flex items-center space-x-2">
              <Mail className="w-4 h-4" />
              <span>tourism@gialai.gov.vn</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}