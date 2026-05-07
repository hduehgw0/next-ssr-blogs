import { useState } from "react";
import { GetServerSideProps } from "next";
import Head from "next/head";
import { Button } from "@/components/ui/button";
import { Heart } from "lucide-react";
import { BlogDetail } from "@/types/BlogDetail";
import { AuthorInfo } from "@/components/AuthorInfo";
import { API_BASE_URL } from "@/lib/constants";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

export default function BlogDetailPage({ blog }: { blog: BlogDetail }) {
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
    <>
      <Head>
        <title>Algo Blog | {blog.title}</title>
        <meta
          name="description"
          content={`${blog.userName}による記事の詳細ページです。`}
        />
      </Head>

      <article className="max-w-3xl mx-auto">
        <header>
          <h1 className="text-3xl md:text-4xl font-bold mb-6 md:mb-8 leading-tight tracking-tight text-gray-900">
            {blog.title}
          </h1>

          <div className="flex flex-wrap items-center justify-between gap-4 mb-6 md:mb-8">
            <address aria-label="記事の著者情報">
              <AuthorInfo userName={blog.userName} userImage={blog.userImage} />
            </address>

            <Button
              variant="outline"
              size="sm"
              onClick={handleToggleLike}
              aria-pressed={isLiked}
              aria-label={isLiked ? "いいねを取り消す" : "この記事にいいねする"}
              className={`flex items-center gap-2 rounded-full px-4 transition-colors duration-200 ${
                isLiked
                  ? "border-pink-500 text-pink-500 bg-pink-50 hover:bg-pink-100 hover:text-pink-600"
                  : "text-gray-500 hover:text-gray-700"
              }`}
            >
              <Heart
                className={`w-5 h-5 transition-all duration-200 ${
                  isLiked ? "fill-current scale-110" : "scale-100"
                }`}
              />
              <span className="text-base font-semibold">{likeCount}</span>
            </Button>
          </div>
        </header>

        <section
          className="bg-gray-50 p-4 sm:p-6 md:p-8 rounded-md border text-gray-800 prose prose-base md:prose-lg prose-slate max-w-none break-words"
          aria-label="記事本文"
        >
          <ReactMarkdown remarkPlugins={[remarkGfm]}>
            {blog.content}
          </ReactMarkdown>
        </section>
      </article>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const id = context.params?.id;

  if (typeof id !== "string") {
    return { notFound: true };
  }

  try {
    const res = await fetch(`${API_BASE_URL}/${id}`);

    if (res.status === 404) {
      return { notFound: true };
    }

    if (!res.ok) {
      throw new Error(`API Error: ${res.status}`);
    }

    const blog: BlogDetail = await res.json();

    return {
      props: {
        blog,
      },
    };
  } catch (error) {
    console.error("個別記事取得エラー:", error);
    return { notFound: true };
  }
};
