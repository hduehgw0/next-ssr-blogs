import { BlogInfo } from "@/types/BlogInfo";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { AuthorInfo } from "@/components/AuthorInfo";

// idは今後のIssueで使用する予定なので、現在は含めていない。
export const BlogCard = ({ title, userName, userImage }: BlogInfo) => {
  return (
    <Card className="hover:bg-gray-50 transition-colors duration-200 cursor-pointer mb-4">
      <CardHeader className="pb-3">
        <CardTitle className="text-xl font-bold leading-snug">
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <AuthorInfo userName={userName} userImage={userImage} />
      </CardContent>
    </Card>
  );
};
