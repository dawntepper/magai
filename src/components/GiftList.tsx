import React from 'react';
import { Gift } from 'lucide-react';

interface GiftListProps {
  suggestions: string;
}

export function GiftList({ suggestions }: GiftListProps) {
  if (!suggestions) return null;

  return (
    <div className="w-full max-w-2xl bg-white rounded-xl shadow-lg p-6">
      <div className="flex items-center space-x-2 mb-4">
        <Gift className="w-6 h-6 text-red-600" />
        <h2 className="text-xl font-semibold text-gray-900">Gift Suggestions</h2>
      </div>
      <div className="prose prose-red max-w-none">
        {suggestions.split('\n').map((line, index) => (
          <p key={index} className="text-gray-700">
            {line}
          </p>
        ))}
      </div>
    </div>
  );
}