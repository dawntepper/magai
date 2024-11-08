import { openai } from './openai';
import type { PersonDetails, GiftSuggestion, ApiError } from '../types/gift';

export async function generateGiftIdeas({ description, budget }: PersonDetails): Promise<{ suggestions?: GiftSuggestion[], error?: ApiError }> {
  if (!import.meta.env.VITE_OPENAI_API_KEY) {
    return {
      error: {
        code: 'missing_api_key',
        message: 'Please add your OpenAI API key to the .env file (VITE_OPENAI_API_KEY)'
      }
    };
  }

  try {
    const completion = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "system",
          content: `You are a helpful gift suggestion assistant. Provide gift ideas based on the person's description and budget. 
          Format the response as a JSON array with exactly 3 objects containing: name, description, price (number), and category.`
        },
        {
          role: "user",
          content: `Suggest gifts for someone who is: ${description}. The budget is up to $${budget}. 
          Ensure each gift suggestion is specific and the price is under the budget.`
        }
      ],
      response_format: { type: "json_object" },
      temperature: 0.7,
    });

    const content = completion.choices[0].message.content;
    if (!content) {
      return {
        error: {
          code: 'no_suggestions',
          message: 'No gift suggestions were generated. Please try again.'
        }
      };
    }

    const parsedContent = JSON.parse(content);
    const suggestions = Array.isArray(parsedContent.suggestions) ? parsedContent.suggestions : [];

    return {
      suggestions: suggestions.map((suggestion: GiftSuggestion) => ({
        ...suggestion,
        imageUrl: `https://source.unsplash.com/800x600/?${encodeURIComponent(suggestion.name.split(' ').join(','))}`,
        affiliateLink: '#'
      }))
    };
  } catch (error: any) {
    const errorMessage = error?.error?.message || error?.message || 'An unexpected error occurred';
    const errorCode = error?.error?.code || 'unknown_error';

    if (errorCode === 'insufficient_quota') {
      return {
        error: {
          code: errorCode,
          message: 'OpenAI API quota exceeded. Please check your billing details.'
        }
      };
    }

    return {
      error: {
        code: errorCode,
        message: errorMessage
      }
    };
  }
}