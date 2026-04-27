import { GetServerSideProps } from "next";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Algo Blog | 記事一覧</title>
        <meta name="description" content="記事一覧ページです。" />
      </Head>

      {/* 今後のIssueでここにレイアウトやBlogCardコンポーネントを追加していきます */}
      <h1>ブログ記事一覧</h1>
    </>
  );
}

const API_BASE_URL = "http://localhost:5678/api/blogs";

export const getServerSideProps: GetServerSideProps = async () => {
  try {
    const res = await fetch(`${API_BASE_URL}`);
    const blogs = await res.json();

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
