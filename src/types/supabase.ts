export interface Database {
  public: {
    Tables: {
      profiles: {
        Row: {
          id: string;
          email: string;
          is_premium: boolean;
          prompts_remaining: number;
          created_at: string;
        };
        Insert: {
          id: string;
          email: string;
          is_premium?: boolean;
          prompts_remaining?: number;
          created_at?: string;
        };
        Update: {
          id?: string;
          email?: string;
          is_premium?: boolean;
          prompts_remaining?: number;
          created_at?: string;
        };
      };
      saved_prompts: {
        Row: {
          id: string;
          user_id: string;
          description: string;
          budget: number;
          created_at: string;
        };
        Insert: {
          id?: string;
          user_id: string;
          description: string;
          budget: number;
          created_at?: string;
        };
        Update: {
          id?: string;
          user_id?: string;
          description?: string;
          budget?: number;
          created_at?: string;
        };
      };
      saved_gifts: {
        Row: {
          id: string;
          user_id: string;
          prompt_id: string;
          name: string;
          description: string;
          price: number;
          category: string;
          image_url?: string;
          affiliate_link?: string;
          created_at: string;
        };
        Insert: {
          id?: string;
          user_id: string;
          prompt_id: string;
          name: string;
          description: string;
          price: number;
          category: string;
          image_url?: string;
          affiliate_link?: string;
          created_at?: string;
        };
        Update: {
          id?: string;
          user_id?: string;
          prompt_id?: string;
          name?: string;
          description?: string;
          price?: number;
          category?: string;
          image_url?: string;
          affiliate_link?: string;
          created_at?: string;
        };
      };
    };
  };
}