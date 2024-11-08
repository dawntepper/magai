export interface PersonDetails {
  description: string;
  budget: number;
}

export interface GiftSuggestion {
  name: string;
  description: string;
  price: number;
  category: string;
  imageUrl?: string;
  affiliateLink?: string;
}

export type ApiError = {
  code: string;
  message: string;
}