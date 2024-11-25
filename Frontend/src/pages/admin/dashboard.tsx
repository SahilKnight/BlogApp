import { useState } from "react";
import Layout from "../../components/Blog/Layout"

interface Blog {
  id: number;
  title: string;
  content: string;
  status: "posted" | "awaiting approval" | "listed";
}

export default function AdminDashboard() {
  const [blogs, setBlogs] = useState<Blog[]>([
    { id: 1, title: "Sample Blog", content: "Content here", status: "awaiting approval" },
  ]);

  const approveBlog = (id: number) => {
    setBlogs((prevBlogs) =>
      prevBlogs.map((blog) =>
        blog.id === id ? { ...blog, status: "listed" } : blog
      )
    );
  };

  return (
    <Layout>
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">Admin Dashboard</h1>

      <section>
        <h2 className="text-xl font-bold mb-4">Pending Blogs</h2>
        {blogs.filter((blog) => blog.status === "awaiting approval").length === 0 ? (
          <p>No blogs awaiting approval.</p>
        ) : (
          blogs
            .filter((blog) => blog.status === "awaiting approval")
            .map((blog) => (
              <div key={blog.id} className="mb-4 p-4 border rounded shadow">
                <h3 className="text-lg font-bold">{blog.title}</h3>
                <p>{blog.content}</p>
                <button
                  onClick={() => approveBlog(blog.id)}
                  className="bg-green-500 text-white p-2 rounded mt-2"
                >
                  Approve
                </button>
              </div>
            ))
        )}
      </section>
    </div>
    </Layout>
  );
}
