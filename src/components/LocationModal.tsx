import React from 'react';
import { X, MapPin, Clock, Activity } from 'lucide-react';
import type { TouristLocation } from '../data/locations';

interface LocationModalProps {
  location: TouristLocation;
  onClose: () => void;
}

export default function LocationModal({ location, onClose }: LocationModalProps) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="relative">
          <img 
            src={location.image} 
            alt={location.name}
            className="w-full h-64 object-cover"
          />
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 bg-white rounded-full p-1 shadow-md"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="p-6">
          <h2 className="text-2xl font-bold mb-4">{location.name}</h2>
          
          <div className="space-y-4 mb-6">
            <p className="text-gray-700">{location.longDescription}</p>
            
            <div className="flex items-center text-gray-600">
              <MapPin className="w-5 h-5 mr-2" />
              <span>{location.address}</span>
            </div>
            
            <div className="flex items-center text-gray-600">
              <Clock className="w-5 h-5 mr-2" />
              <span>Thời điểm đẹp nhất: {location.bestTimeToVisit}</span>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-3 flex items-center">
              <Activity className="w-5 h-5 mr-2" />
              Hoạt động du lịch
            </h3>
            <ul className="list-disc list-inside space-y-1 text-gray-700">
              {location.activities.map((activity, index) => (
                <li key={index}>{activity}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}