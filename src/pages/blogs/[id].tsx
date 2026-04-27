import { GetServerSideProps } from "next";

const API_BASE_URL = "http://localhost:5678/api/blogs";

export const getServerSideProps: GetServerSideProps = async (context) => {
  const id = context.params?.id;

  try {
    const res = await fetch(`${API_BASE_URL}/${id}`);

    const blog = await res.json();

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
