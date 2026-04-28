import { GetServerSideProps } from "next";
import Head from "next/head";
import { BlogDetail } from "@/types/BlogDetail";
import { AuthorInfo } from "@/components/AuthorInfo";
import { API_BASE_URL } from "@/lib/constants";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

export default function BlogDetailPage({ blog }: { blog: BlogDetail }) {
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

          <address className="mb-6 md:mb-8" aria-label="記事の著者情報">
            <AuthorInfo userName={blog.userName} userImage={blog.userImage} />
          </address>
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
