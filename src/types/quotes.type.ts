export interface QuoteData {
  id: number;
  text: string;
  author: string;
  category: "All" | "Funny" | "Inspirational" | "Life" | "Wisdom";
  likes: number;
}

export interface VotePostProps {
  quote: QuoteData;
  handleLike: (quoteId: number) => void;
}
