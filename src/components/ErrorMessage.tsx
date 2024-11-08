import React from 'react';

interface ErrorMessageProps {
  message: string;
}

export const ErrorMessage: React.FC<ErrorMessageProps> = ({ message }) => (
  <div className="w-full max-w-2xl mx-auto p-4 bg-red-50 border border-red-200 rounded-lg">
    <p className="text-red-600">{message}</p>
  </div>
);