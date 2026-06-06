import Link from "next/link";

export function Header() {
  return (
    <header className="w-full border-b bg-white">
      <nav
        aria-label="メインナビゲーション"
        className="container mx-auto flex h-16 items-center justify-between px-4"
      >
        <Link href="/" className="text-xl font-bold">
          Algo Blog
        </Link>
        <Link
          href="/blogs/new"
          className="flex items-center self-stretch border-x border-gray-300 px-6 text-sm font-medium text-gray-900 transition-colors hover:bg-gray-50"
        >
          新規投稿
        </Link>
      </nav>
    </header>
  );
}
