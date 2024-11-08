export interface User {
  id: string;
  email: string;
  isPremium: boolean;
  promptsRemaining: number;
  savedPrompts: SavedPrompt[];
  savedGifts: SavedGift[];
}

export interface SavedPrompt {
  id: string;
  description: string;
  budget: number;
  createdAt: Date;
}

export interface SavedGift {
  id: string;
  promptId: string;
  gift: {
    name: string;
    description: string;
    price: number;
    category: string;
    imageUrl?: string;
    affiliateLink?: string;
  };
  createdAt: Date;
}