import React from 'react';
import type { GiftSuggestion } from '../types/gift';

interface GiftSuggestionsProps {
  suggestions: GiftSuggestion[];
}

export const GiftSuggestions: React.FC<GiftSuggestionsProps> = ({ suggestions }) => (
  <div className="w-full max-w-7xl mx-auto grid gap-6 md:grid-cols-2 lg:grid-cols-3">
    {suggestions.map((gift, index) => (
      <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="relative">
          <img 
            src={gift.imageUrl} 
            alt={gift.name}
            className="w-full h-48 object-cover"
          />
          <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white text-xs px-2 py-1">
            Demo image from Unsplash
          </div>
        </div>
        <div className="p-4">
          <div className="flex justify-between items-start mb-2">
            <h3 className="text-lg font-semibold text-gray-900">{gift.name}</h3>
            <span className="text-green-600 font-medium">${gift.price}</span>
          </div>
          <p className="text-gray-600 text-sm mb-2">{gift.description}</p>
          <span className="inline-block bg-gray-100 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">
            {gift.category}
          </span>
          {gift.affiliateLink && (
            <a
              href={gift.affiliateLink}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 block text-center bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 transition-colors"
            >
              View Product
            </a>
          )}
        </div>
      </div>
    ))}
  </div>
);