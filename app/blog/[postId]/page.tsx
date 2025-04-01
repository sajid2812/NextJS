import axios from "axios";

export default async function BlogPage({ params }: any) {
  const postId = params.blogId;
  const response = await axios.get(
    `https://jsonplaceholder.typicode.com/posts/${postId}`
  );
  return <div>Blog page {postId}</div>;
}
