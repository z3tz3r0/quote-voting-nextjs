"use client";

import AddQuote from "@/components/AddQuote";
import NavBar from "@/components/NavBar";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import VotePost from "@/components/VotePost";
import VotePostSkeleton from "@/components/VotePostSkeleton";
import {
  quoteCategories,
  QuoteCategory,
  QuoteData,
  VoteType,
} from "@/types/quotes.type";
import { useSession } from "next-auth/react";
import { useCallback, useEffect, useState } from "react";
import { quotesData } from "../data/quotes";

export default function Home() {
  const [allQuotes, setAllQuotes] = useState<QuoteData[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentCategory, setCurrentCategory] = useState<QuoteCategory>("All");
  const [categorizedQuotes, setCategorizedQuotes] = useState<QuoteData[]>([]);
  const [displayQuotes, setDisplayQuotes] = useState<QuoteData[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState("");
  const QUOTE_PER_PAGE = 10;

  const { data: session } = useSession();

  useEffect(() => {
    const quotes = localStorage.getItem("quotes");
    if (quotes && quotes.length === 0) {
      setAllQuotes(JSON.parse(quotes));
    } else {
      localStorage.setItem("quotes", JSON.stringify(quotesData));
      setAllQuotes(quotesData);
    }
    setIsLoading(false);
  }, []);

  useEffect(() => {
    localStorage.setItem("quotes", JSON.stringify(allQuotes));
  }, [allQuotes]);

  useEffect(() => {
    const time = setTimeout(() => {
      setDebouncedSearchTerm(searchTerm);
    }, 500);
    return () => clearTimeout(time);
  }, [searchTerm]);

  useEffect(() => {
    let result = allQuotes;

    if (currentCategory !== "All") {
      result = result.filter((quote) => quote.category === currentCategory);
    }

    if (debouncedSearchTerm) {
      const search = debouncedSearchTerm.toLowerCase();
      result = result.filter((quote) => {
        return (
          quote.text.toLowerCase().includes(search) ||
          quote.author.toLowerCase().includes(search)
        );
      });
    }

    setCategorizedQuotes(result);
    setDisplayQuotes(result.slice(0, QUOTE_PER_PAGE));
  }, [allQuotes, currentCategory, debouncedSearchTerm]);

  const handleVote = (quoteId: number, voteType: VoteType) => {
    const updateVotes = (quote: QuoteData) => {
      if (quote.id === quoteId) {
        switch (voteType) {
          case "upvote":
            return { ...quote, votes: quote.votes + 1 };
          case "downvote":
            return { ...quote, votes: quote.votes - 1 };
        }
      }
      return quote;
    };
    setAllQuotes((prev) => prev.map(updateVotes));
  };

  const handleAddQuote = (newQuote: QuoteData) => {
    setAllQuotes((prev) => (prev ? [newQuote, ...prev] : [newQuote]));
  };

  const handleFilterQuote = (category: string) => {
    setCurrentCategory(category as QuoteCategory);
  };

  const onScroll = useCallback(() => {
    if (
      window.innerHeight + window.scrollY >= document.body.offsetHeight - 400 &&
      displayQuotes.length < categorizedQuotes.length
    ) {
      const newDisplayQuotes = Math.min(
        categorizedQuotes.length,
        displayQuotes.length + QUOTE_PER_PAGE
      );
      setDisplayQuotes(categorizedQuotes.slice(0, newDisplayQuotes));
    }
  }, [categorizedQuotes, displayQuotes.length]);

  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [onScroll]);

  return (
    <>
      <NavBar />
      <div className="min-h-screen p-8 font-[family-name:var(--font-geist-sans)]">
        <main className="max-w-4xl mx-auto">
          {/* Search bar section */}
          <section className="flex items-center gap-8 mb-4">
            <p>Search&nbsp;:</p>
            <Input
              type="search"
              placeholder="Search quotes or authors"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-background"
            />
          </section>

          {/* Only login user can add quote here */}
          <section>
            {session && session.user ? (
              <AddQuote handleAddQuote={handleAddQuote} />
            ) : (
              <Card className="mb-4">
                <CardHeader>
                  <CardTitle>Login</CardTitle>
                  <CardDescription>
                    To add a quote, please login.
                  </CardDescription>
                </CardHeader>
              </Card>
            )}
          </section>

          {/* Filtering by category section */}
          <section className="flex gap-4 flex-wrap justify-center mb-4">
            {quoteCategories.map((category) => (
              <Button
                key={category}
                onClick={() => handleFilterQuote(category)}
                className={
                  currentCategory === category
                    ? "bg-accent text-foreground hover:bg-gray-200 border-1 border-primary"
                    : ""
                }
              >
                {category}
              </Button>
            ))}
          </section>

          {/* The actual section for quotes */}
          <section className="grid gap-4">
            {isLoading
              ? Array.from({ length: 5 }).map((_, index) => (
                  <VotePostSkeleton key={index} />
                ))
              : displayQuotes.map((quote) => (
                  <VotePost
                    key={quote.id}
                    quote={quote}
                    handleVote={handleVote}
                  />
                ))}
          </section>
        </main>
      </div>
    </>
  );
}
