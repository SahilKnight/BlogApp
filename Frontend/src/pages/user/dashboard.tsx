import { useState } from "react";
import BlogCard from "@/components/Blog/BlogCard";

export default function UserDashboard() {
  const [blogs, setBlogs] = useState([
    { id: 1, title: "My First Blog", content: "This is my blog.", status: "awaiting approval" },
  ]);

  const addBlog = () => {
    const newBlog = {
      id: blogs.length + 1,
      title: "New Blog",
      content: "New blog content...",
      status: "awaiting approval",
    };
    setBlogs([...blogs, newBlog]);
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">User Dashboard</h1>

      {/* User Info Section */}
      <section className="mb-8">
        <h2 className="text-xl font-bold">Your Info</h2>
        {/* Add form to edit personal info */}
      </section>

      {/* Blogs Section */}
      <section>
        <h2 className="text-xl font-bold mb-4">Your Blogs</h2>
        <button
          onClick={addBlog}
          className="mb-4 bg-blue-500 text-white p-2 rounded"
        >
          Add Blog
        </button>
        <div className="grid gap-4">
          {/* {blogs.map((blog) => (
            <BlogCard key={blog.id} {...blog} />
          ))} */}
        </div>
      </section>
    </div>
  );
}
