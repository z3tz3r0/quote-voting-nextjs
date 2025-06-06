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
import { ThumbsUpIcon } from "lucide-react";
import { FC } from "react";

const VotePost: FC<VotePostProps> = ({ quote, handleLike }) => {
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
        <Button
          variant="ghost"
          className="px-16 rounded-full"
          onClick={() => handleLike(quote.id)}
        >
          <ThumbsUpIcon />
          Like
        </Button>
        <p>
          <b>{new Intl.NumberFormat().format(quote.likes)}</b>{" "}
          {quote.likes === 1 ? "like" : "likes"}
        </p>
      </CardFooter>
    </Card>
  );
};

export default VotePost;
