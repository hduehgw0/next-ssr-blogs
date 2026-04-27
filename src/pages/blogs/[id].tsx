import { GetServerSideProps } from "next";
import { BlogDetail } from "@/types/BlogDetail";
import { AuthorInfo } from "@/components/AuthorInfo";

export default function BlogDetailPage({ blog }: { blog: BlogDetail }) {
  return (
    <article className="max-w-3xl mx-auto py-8">
      <header>
        <h1 className="text-3xl font-bold mb-6">{blog.title}</h1>

        <address className="mb-8">
          <AuthorInfo userName={blog.userName} userImage={blog.userImage} />
        </address>
      </header>

      <section className="bg-gray-50 p-6 rounded-md border">
        <div className="whitespace-pre-wrap text-gray-800">
          {blog.content}
        </div>
      </section>
    </article>
  );
}

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
