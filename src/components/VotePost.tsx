import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { VotePostProps } from "@/types/quotes.type";
import { ThumbsDownIcon, ThumbsUpIcon } from "lucide-react";
import { FC } from "react";

const VotePost: FC<VotePostProps> = ({ quote, handleVote }) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>
          <p className="text-xl">&quot;{quote.text}&quot;</p>
        </CardTitle>
        <CardDescription>
          <p>— {quote.author}</p>
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Badge>{quote.category}</Badge>
      </CardContent>
      <Separator />
      <CardFooter className="flex justify-between">
        <div className="flex gap-2">
          <Button
            variant="ghost"
            size="icon"
            className="rounded-full"
            onClick={() => handleVote(quote.id, "upvote")}
          >
            <ThumbsUpIcon />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="rounded-full"
            onClick={() => handleVote(quote.id, "downvote")}
          >
            <ThumbsDownIcon />
          </Button>
        </div>
        <p>
          <b
            className={
              quote.votes < 0
                ? "text-red-500"
                : quote.votes > 0
                ? "text-green-500"
                : "text-black"
            }
          >
            {new Intl.NumberFormat().format(quote.votes)}
          </b>{" "}
          {quote.votes === 1 ? "like" : "likes"}
        </p>
      </CardFooter>
    </Card>
  );
};

export default VotePost;
