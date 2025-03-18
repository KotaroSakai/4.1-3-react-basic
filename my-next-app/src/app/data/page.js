import Link from "next/link";
export const revalidate = 60;

export default async function Data () {
  // 外部APIから投稿データを取得（例: jsonplaceholder）
  const res = await fetch(
    "https://jsonplaceholder.typicode.com/posts?_limit=3"
  );

  if (!res.ok) {
    throw new Error("データの取得に失敗しました");
  }

  const posts = await res.json();

  console.log(posts);

  return (
    <div style={{ padding: "2rem" }}>
      <h1>データフェッチングの例</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id} style={{ marginBottom: "1rem" }}>
            <Link href={`/data/${post.id}`}>{post.title}</Link>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}