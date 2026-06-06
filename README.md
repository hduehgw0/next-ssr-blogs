# next-ssr-blog-2

アルゴ式 BootCamp 「Next.js① SSR」セクションで作成する、SSR（サーバーサイドレンダリング）を最大限に活用した Qiita ライクなブログサイトです。

## プロジェクトの目的

このプロジェクトは、Next.js (Pages Router) を用いて、サーバー側でデータを取得し、動的なコンテンツを高速に表示する **SSR (Server Side Rendering)** の仕組みを深く理解することを目的としています。

### 学習・実装の焦点
- **Pages Router** による動的ルーティングの管理
- `getServerSideProps` を用いたサーバーサイドでのデータフェッチ
- **shadcn/ui** と **Tailwind CSS** を用いたセマンティックなUI実装
- `react-markdown` による Markdown コンテンツのレンダリング
- APIサーバーとの連携

## 技術スタック

- **Frontend**: Next.js (Pages Router), TypeScript
- **Styling**: Tailwind CSS, shadcn/ui
- **Markdown**: react-markdown, remark-gfm (GitHub Flavored Markdown)

### 主要なエンドポイント

| メソッド | パス | 説明 | 備考 |
| :--- | :--- | :--- | :--- |
| `GET` | `/blogs` | 記事一覧を取得 | SSRで取得しリスト表示に使用 |
| `GET` | `/blogs/{id}` | 特定の記事の詳細を取得 | 動的ルーティングで使用 |

## 開発環境のセットアップ

### 1. バックエンドの起動 (Docker)
APIリポジトリ（https://github.com/sak-swe-bootcamp/next-js-task-api ）にアクセスし、クローンをしてDockerコンテナを起動します。

### 2. フロントエンドの起動
プロジェクトのルートディレクトリで以下のコマンドを実行してください。

```bash
pnpm install
pnpm dev
```
起動後、 http://localhost:3000 にアクセスしてください。


