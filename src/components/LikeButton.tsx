import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Heart } from "lucide-react";
import { cn } from "@/lib/utils";

export function LikeButton() {
  const [likeCount, setLikeCount] = useState<number>(0);
  const [isLiked, setIsLiked] = useState<boolean>(false);

  const handleToggleLike = () => {
    if (isLiked) {
      setLikeCount((prev) => prev - 1);
      setIsLiked(false);
    } else {
      setLikeCount((prev) => prev + 1);
      setIsLiked(true);
    }
  };

  return (
    <Button
      variant="outline"
      size="sm"
      onClick={handleToggleLike}
      aria-pressed={isLiked}
      aria-label={isLiked ? "いいねを取り消す" : "この記事にいいねする"}
      className={cn(
        "flex items-center gap-2 rounded-full px-4 transition-colors duration-200",
        isLiked
          ? "border-pink-500 text-pink-500 bg-pink-50 hover:bg-pink-100 hover:text-pink-600"
          : "text-gray-500 hover:text-gray-700"
      )}
    >
      <Heart
        className={cn(
          "w-5 h-5 transition-all duration-200",
          isLiked ? "fill-current scale-110" : "scale-100"
        )}
      />
      <span className="text-base font-semibold">{likeCount}</span>
    </Button>
  );
}
