import { GetServerSideProps } from "next";
import { BlogDetail } from "@/types/BlogDetail";

const API_BASE_URL = "http://localhost:5678/api/blogs";

export const getServerSideProps: GetServerSideProps = async (context) => {
  const id = context.params?.id;

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
