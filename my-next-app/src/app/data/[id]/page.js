export default async function Post ({params}) {
  const {id} = params;
  console.log({id});
  
  // 外部APIから投稿データを取得（例: jsonplaceholder）
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}`
  );

  if (!res.ok) {
    throw new Error("データの取得に失敗しました");
  }

  const post = await res.json();
  console.log(post);
  
  return (
    <div style={{ padding: "2rem" }}>
      <h1>データフェッチングの例</h1>
      <div>
        <h1>{post.title}</h1>
        <p>{post.body}</p>
      </div>
    </div>
  );
}