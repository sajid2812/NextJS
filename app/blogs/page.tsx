import axios from "axios";

async function getBlogs() {
  const response = await axios.get(
    "https://jsonplaceholder.typicode.com/todos/"
  );
  return response.data;
}

export default async function Blogs() {
  const blogs = await getBlogs();
  return (
    <div>
      Learn Recoil / Redux from the best platform in the world
      {blogs.map((blog: ITodo, i: number) => (
        <Todo key={i} title={blog.title} completed={blog.completed} />
      ))}
    </div>
  );
}

interface ITodo {
  title: string;
  completed: boolean;
}

function Todo({ title, completed }: ITodo) {
  return (
    <div>
      {title} {"=>"} {completed ? "done" : "not done"}
    </div>
  );
}
