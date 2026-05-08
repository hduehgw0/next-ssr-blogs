import { useState } from "react";
import Head from "next/head";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function CreateBlogPage() {
  const [formData, setFormData] = useState({
    title: "",
    userName: "",
    userImage: "",
    content: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <>
      <Head>
        <title>Algo Blog | 新規投稿</title>
        <meta name="description" content="新規記事を投稿するページです。" />
      </Head>
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">記事を投稿する</h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <form className="space-y-6 flex flex-col">
            <div>
              <label htmlFor="title" className="sr-only">
                記事のタイトル
              </label>
              <Input
                id="title"
                name="title"
                value={formData.title}
                onChange={handleChange}
                placeholder="記事のタイトル"
                className="text-lg font-bold"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label htmlFor="userName" className="sr-only">
                  投稿者名
                </label>
                <Input
                  id="userName"
                  name="userName"
                  value={formData.userName}
                  onChange={handleChange}
                  placeholder="投稿者名"
                />
              </div>
              <div>
                <label htmlFor="userImage" className="sr-only">
                  プロフィール画像URL
                </label>
                <Input
                  id="userImage"
                  name="userImage"
                  value={formData.userImage}
                  onChange={handleChange}
                  placeholder="プロフィール画像URL"
                />
              </div>
            </div>
            <div className="flex-grow flex flex-col">
              <label htmlFor="content" className="sr-only">
                本文
              </label>
              <textarea
                id="content"
                name="content"
                value={formData.content}
                onChange={handleChange}
                placeholder="マークダウンで本文を記述..."
                className="flex-grow min-h-[400px] w-full p-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 resize-y"
              />
            </div>
            <Button className="w-full text-lg py-6">投稿</Button>
          </form>

          <section className="hidden lg:block bg-gray-50 border rounded-md p-8 overflow-y-auto max-h-[800px]">
            <h2 className="text-sm text-gray-500 mb-4 border-b pb-2">
              プレビュー
            </h2>
            <div className="prose prose-slate max-w-none break-words">
              <h1>{formData.title || "ここにタイトルがプレビューされます"}</h1>

              {formData.content ? (
                <ReactMarkdown remarkPlugins={[remarkGfm]}>
                  {formData.content}
                </ReactMarkdown>
              ) : (
                <p>ここに本文がプレビューされます</p>
              )}
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
