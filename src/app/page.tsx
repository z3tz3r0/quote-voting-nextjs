"use client";

import NavBar from "@/components/NavBar";
import VotePost from "@/components/VotePost";
import { QuoteData } from "@/types/quotes.type";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import { quotesData } from "../data/quotes";

export default function Home() {
  const [quotes, setQuotes] = useState<QuoteData[]>();
  const { data: session } = useSession();

  console.log(session);

  useEffect(() => {
    const quotes = localStorage.getItem("quotes");
    if (quotes) {
      setQuotes(JSON.parse(quotes));
    } else {
      localStorage.setItem("quotes", JSON.stringify(quotesData));
      setQuotes(quotesData);
    }
  }, []);

  useEffect(() => {
    if (quotes !== undefined) {
      localStorage.setItem("quotes", JSON.stringify(quotes));
    }
  }, [quotes]);

  const handleLike = (quoteId: number) => {
    setQuotes((prev) =>
      prev?.map((quote) =>
        quote.id === quoteId ? { ...quote, likes: quote.likes + 1 } : quote
      )
    );
  };

  return (
    <>
      <NavBar />
      <div className="min-h-screen p-8 font-[family-name:var(--font-geist-sans)]">
        <main>
          <section className="grid gap-4 max-w-4xl mx-auto">
            {quotes?.map((quote) => (
              <VotePost key={quote.id} quote={quote} handleLike={handleLike} />
            ))}
          </section>
        </main>
      </div>
    </>
  );
}
