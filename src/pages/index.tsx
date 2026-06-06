import { GetServerSideProps } from "next";
import { BlogInfo } from "@/types/BlogInfo";
import { BlogCard } from "@/components/BlogCard";
import Head from "next/head";

export default function Home({ blogs }: { blogs: BlogInfo[] }) {
  return (
    <>
      <Head>
        <title>Algo Blog | 記事一覧</title>
        <meta name="description" content="記事一覧ページです。" />
      </Head>

      <section className="space-y-4">
        <h1 className="text-2xl font-bold mb-6">ブログ記事一覧</h1>

        <ul className="space-y-4">
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

const API_BASE_URL = "http://localhost:5678/api/blogs";

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
