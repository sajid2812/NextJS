import axios from "axios";

export default async function BlogPage({ params }: any) {
  const postId = {await params}.blogId;
  const response: any = await axios.get(
    `https://jsonplaceholder.typicode.com/posts/${postId}`
  );
  return (
    <div>
      Blog page {postId}
      <br />
      title - {response.title} body - {response.body}
    </div>
  );
}
