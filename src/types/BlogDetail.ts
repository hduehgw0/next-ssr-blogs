import { BlogInfo } from "./BlogInfo";

export type BlogDetail = BlogInfo & {
  content: string;
  createdAt: string;
  updatedAt: string;
};
