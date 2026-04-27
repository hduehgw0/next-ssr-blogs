import { BlogInfo } from "@/types/BlogInfo";

// idとuserImageは今後のIssueで使用するため、まだ追加していません。
export const BlogCard = ({ title, userName }: BlogInfo) => {
  return (
    <div className="border p-4 mb-4 rounded-md shadow-sm">
      <p className="text-sm text-gray-500">ユーザー: {userName}</p>
      <h2 className="text-lg font-bold text-blue-600">{title}</h2>
      {/* Issue 3でここに shadcn/ui の Avatar などを組み込みます */}
    </div>
  );
};
