import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { Separator } from "./ui/separator";

const VotePostSkeleton = () => {
  return (
    <Card>
      <CardHeader className="flex flex-col gap-4">
        <Skeleton className="w-9/10 h-8" />
        <Skeleton className="w-[15ch] h-5" />
      </CardHeader>
      <CardContent>
        <Skeleton className="w-[6ch] h-5" />
      </CardContent>
      <Separator />
      <CardFooter className="flex justify-between">
        <div className="flex gap-4">
          <Skeleton className="h-10 w-10 rounded-full" />
          <Skeleton className="h-10 w-10 rounded-full" />
        </div>
        <Skeleton className="h-8 w-[8ch]" />
      </CardFooter>
    </Card>
  );
};

export default VotePostSkeleton;
