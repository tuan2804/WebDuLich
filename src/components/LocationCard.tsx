import React from 'react';
import { MapPin, Clock } from 'lucide-react';
import type { TouristLocation } from '../data/locations';

interface LocationCardProps {
  location: TouristLocation;
  onClick: () => void;
}

export default function LocationCard({ location, onClick }: LocationCardProps) {
  return (
    <div 
      className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer transform transition hover:scale-105"
      onClick={onClick}
    >
      <img 
        src={location.image} 
        alt={location.name}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2">{location.name}</h3>
        <p className="text-gray-600 mb-4">{location.description}</p>
        
        <div className="flex items-center text-sm text-gray-500 mb-2">
          <MapPin className="w-4 h-4 mr-2" />
          {location.address}
        </div>
        
        <div className="flex items-center text-sm text-gray-500">
          <Clock className="w-4 h-4 mr-2" />
          {location.bestTimeToVisit}
        </div>
      </div>
    </div>
  );
}