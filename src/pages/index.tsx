import { GetServerSideProps } from "next";
import { BlogInfo } from "@/types/BlogInfo";
import { BlogCard } from "@/components/BlogCard";
import { API_BASE_URL } from "@/lib/constants";
import Head from "next/head";

export default function Home({ blogs }: { blogs: BlogInfo[] }) {
  return (
    <>
      <Head>
        <title>Algo Blog | 記事一覧</title>
        <meta name="description" content="記事一覧ページです。" />
      </Head>

      <section className="max-w-4xl mx-auto" aria-labelledby="blog-list-title">
        <h1
          id="blog-list-title"
          className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 md:mb-8 tracking-tight"
        >
          ブログ記事一覧
        </h1>

        <ul className="space-y-4 md:space-y-6">
          {blogs.map((blog) => (
            <li key={blog.id}>
              <BlogCard
                id={blog.id}
                title={blog.title}
                userName={blog.userName}
                userImage={blog.userImage}
              />
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  try {
    const res = await fetch(`${API_BASE_URL}`);

    if (!res.ok) {
      throw new Error(`API Error: ${res.status} ${res.statusText}`);
    }

    const blogs: BlogInfo[] = await res.json();

    return {
      props: {
        blogs,
      },
    };
  } catch (error) {
    console.error("データ取得エラー:", error);
    return { props: { blogs: [] } };
  }
};
