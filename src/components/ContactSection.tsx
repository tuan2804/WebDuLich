import React from 'react';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

export default function ContactSection() {
  return (
    <section id="contact" className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Liên Hệ</h2>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold mb-6">Thông Tin Liên Hệ</h3>
            
            <div className="space-y-4">
              <div className="flex items-center">
                <MapPin className="w-5 h-5 mr-3 text-green-600" />
                <span>Sở Du Lịch Gia Lai<br />2 Hoàng Hoa Thám, Pleiku, Gia Lai</span>
              </div>
              
              <div className="flex items-center">
                <Phone className="w-5 h-5 mr-3 text-green-600" />
                <span>0269 3824 888</span>
              </div>
              
              <div className="flex items-center">
                <Mail className="w-5 h-5 mr-3 text-green-600" />
                <span>tourism@gialai.gov.vn</span>
              </div>
              
              <div className="flex items-center">
                <Clock className="w-5 h-5 mr-3 text-green-600" />
                <span>Thứ 2 - Thứ 6: 7:30 - 17:00</span>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold mb-6">Gửi Thông Tin</h3>
            
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Họ và tên
                </label>
                <input
                  type="text"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-green-500"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-green-500"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Nội dung
                </label>
                <textarea
                  rows={4}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-green-500"
                />
              </div>
              
              <button
                type="submit"
                className="w-full bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700 transition"
              >
                Gửi
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}