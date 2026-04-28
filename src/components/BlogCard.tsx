import Link from "next/link";
import { BlogInfo } from "@/types/BlogInfo";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { AuthorInfo } from "@/components/AuthorInfo";

export const BlogCard = ({ id, title, userName, userImage }: BlogInfo) => {
  return (
    <Link href={`/blogs/${id}`} className="block mb-4 cursor-pointer">
      <Card className="hover:bg-gray-50 transition-colors duration-200">
        <CardHeader className="pb-3">
          <CardTitle className="text-xl font-bold leading-snug">
            {title}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <AuthorInfo userName={userName} userImage={userImage} />
        </CardContent>
      </Card>
    </Link>
  );
};
