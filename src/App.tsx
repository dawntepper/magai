import React, { useState } from 'react';
import { GiftForm } from './components/GiftForm';
import { GiftSuggestions } from './components/GiftSuggestions';
import { ErrorMessage } from './components/ErrorMessage';
import { generateGiftIdeas } from './lib/giftSuggestions';
import type { PersonDetails, GiftSuggestion, ApiError } from './types/gift';

function App() {
  const [suggestions, setSuggestions] = useState<GiftSuggestion[]>([]);
  const [error, setError] = useState<ApiError | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (details: PersonDetails) => {
    setIsLoading(true);
    setError(null);
    setSuggestions([]);

    const result = await generateGiftIdeas(details);
    
    if (result.error) {
      setError(result.error);
    } else if (result.suggestions) {
      setSuggestions(result.suggestions);
    }

    setIsLoading(false);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-7xl mx-auto space-y-8">
        <GiftForm onSubmit={handleSubmit} isLoading={isLoading} />
        
        {error && <ErrorMessage message={error.message} />}
        
        {suggestions.length > 0 && <GiftSuggestions suggestions={suggestions} />}
      </div>
    </div>
  );
}

export default App;