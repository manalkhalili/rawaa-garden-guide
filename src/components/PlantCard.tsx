
import React from 'react';
import { Link } from 'react-router-dom';

interface PlantCardProps {
  id: string;
  name: string;
  image: string;
  shortDescription: string;
  category: 'indoor' | 'outdoor' | 'seed';
}

const PlantCard: React.FC<PlantCardProps> = ({ id, name, image, shortDescription, category }) => {
  const categoryMap = {
    'indoor': 'داخلي',
    'outdoor': 'خارجي',
    'seed': 'بذور'
  };
  
  const categoryClass = {
    'indoor': 'bg-green-100 text-green-800',
    'outdoor': 'bg-blue-100 text-blue-800',
    'seed': 'bg-yellow-100 text-yellow-800'
  };

  return (
    <div className="plant-card group">
      <div className="relative overflow-hidden">
        <img 
          src={image} 
          alt={name} 
          className="plant-image group-hover:scale-105 transition-transform duration-300"
        />
        <span className={`absolute top-2 right-2 text-xs px-2 py-1 rounded-full rtl ${categoryClass[category]}`}>
          {categoryMap[category]}
        </span>
      </div>
      <div className="p-4 rtl">
        <h3 className="text-xl font-bold mb-2">{name}</h3>
        <p className="text-gray-600 text-sm mb-4">{shortDescription}</p>
        <Link 
          to={`/plant/${id}`}
          className="inline-block text-rawaa-primary font-medium hover:underline"
        >
          اقرأ المزيد ←
        </Link>
      </div>
    </div>
  );
};

export default PlantCard;
