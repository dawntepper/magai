import React, { useState } from 'react';
import { Gift } from 'lucide-react';
import type { PersonDetails } from '../types/gift';

interface GiftFormProps {
  onSubmit: (details: PersonDetails) => void;
  isLoading: boolean;
}

export const GiftForm: React.FC<GiftFormProps> = ({ onSubmit, isLoading }) => {
  const [description, setDescription] = useState('');
  const [budget, setBudget] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({
      description,
      budget: Number(budget)
    });
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-2xl mx-auto space-y-6 bg-white p-6 rounded-lg shadow-md">
      <div className="flex items-center gap-2 mb-6">
        <Gift className="w-6 h-6 text-indigo-600" />
        <h2 className="text-2xl font-bold text-gray-900">Gift Finder</h2>
      </div>
      
      <div>
        <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-2">
          Describe the person you're shopping for
        </label>
        <textarea
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
          rows={4}
          placeholder="Include their interests, hobbies, age, and any other relevant details..."
          required
        />
      </div>

      <div>
        <label htmlFor="budget" className="block text-sm font-medium text-gray-700 mb-2">
          Budget (up to $ amount)
        </label>
        <input
          type="number"
          id="budget"
          value={budget}
          onChange={(e) => setBudget(e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
          placeholder="100"
          min="1"
          required
        />
      </div>

      <button
        type="submit"
        disabled={isLoading}
        className={`w-full py-2 px-4 rounded-md text-white font-medium ${
          isLoading 
            ? 'bg-indigo-400 cursor-not-allowed' 
            : 'bg-indigo-600 hover:bg-indigo-700'
        } transition-colors`}
      >
        {isLoading ? 'Finding perfect gifts...' : 'Find Gift Ideas'}
      </button>
    </form>
  );
};