export const quoteCategories = [
  "All",
  "Funny",
  "Inspirational",
  "Life",
  "Wisdom",
] as const;

export type QuoteCategory = (typeof quoteCategories)[number];

export interface QuoteData {
  id: number;
  text: string;
  author: string;
  category: QuoteCategory;
  votes: number;
}

export type VoteType = "upvote" | "downvote";

export interface VotePostProps {
  quote: QuoteData;
  handleVote: (quoteId: number, voteType: VoteType) => void;
}

export interface AddQuoteProps {
  handleAddQuote: (newQuote: QuoteData) => void;
}

export const sortOrder = ["default", "votes-desc", "votes-asc"] as const;

export type SortOrder = (typeof sortOrder)[number];
