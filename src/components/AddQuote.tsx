import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { quotesData } from "@/data/quotes";
import {
  AddQuoteProps,
  quoteCategories,
  QuoteCategory,
} from "@/types/quotes.type";
import { FC, useState } from "react";
import { toast } from "sonner";
import { Button } from "./ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";

interface CategorySelectProps {
  value: QuoteCategory | undefined;
  onValueChange: (value: QuoteCategory) => void;
}

const CategorySelect: FC<CategorySelectProps> = ({ value, onValueChange }) => {
  const categories: QuoteCategory[] = quoteCategories.filter(
    (category) => category !== "All"
  );

  return (
    <Select value={value} onValueChange={onValueChange}>
      <SelectTrigger className="w-[200px]">
        <SelectValue placeholder="Select a category" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          {categories.map((category) => (
            <SelectItem key={category} value={category}>
              {category}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};

const AddQuote: FC<AddQuoteProps> = ({ handleAddQuote }) => {
  const [selectedCategory, setSelectedCategory] = useState<
    QuoteCategory | undefined
  >();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const quote = data.get("quote");
    const author = data.get("author");
    const category = selectedCategory;

    if (!quote || !author || !category) {
      toast.error("Please fill all the fields.");
      return;
    }

    handleAddQuote({
      id: quotesData.length + 1,
      text: quote.toString(),
      author: author.toString(),
      category: category,
      votes: 0,
    });

    toast.success("Quote added successfully!");
    (e.target as HTMLFormElement).reset();
    setSelectedCategory(undefined);
  };

  return (
    <Card className="flex flex-col gap-4 mb-4">
      <CardHeader>
        <CardTitle>Add the Quote</CardTitle>
        <CardDescription>
          You can add your own quote here or your favourite quote from other
          people.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <Label htmlFor="quote">Quote</Label>
            <Textarea placeholder="Type the quote here." name="quote" />
          </div>
          <div className="flex flex-col gap-2">
            <Label htmlFor="author">Author</Label>
            <Input type="text" id="author" name="author" />
          </div>
          <div className="flex justify-between items-center">
            <div className="flex flex-col gap-2">
              <Label htmlFor="category">Category</Label>
              <CategorySelect
                value={selectedCategory}
                onValueChange={(value) =>
                  setSelectedCategory(value as QuoteCategory)
                }
              />
            </div>
            <Button type="submit">Add Quote</Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
};

export default AddQuote;
