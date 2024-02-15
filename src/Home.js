import { useState, useEffect } from "react";
import Bloglist from "./Bloglist";

const Home = () => {
  const [blogs, setBlogs] = useState([
    {
      title: "My new website",
      body: "lorem ipsum...",
      author: "Kelvin",
      id: 1,
    },
    {
      title: "Welcome party!",
      body: "lorem ipsum...",
      author: "Odongo",
      id: 2,
    },
    {
      title: "Web dev top tips",
      body: "lorem ipsum...",
      author: "Kelvin",
      id: 3,
    },
  ]);

  useEffect(() => console.log("use efffect ran")), [];

  const handleDelete = (id) => {
    const newBlogs = blogs.filter((blog) => blog.id !== id);
    setBlogs(newBlogs);
  };

  return (
    <div className="home">
      <Bloglist blogs={blogs} title="All Blogs!" handleDelete={handleDelete} />
    </div>
  );
};

export default Home;
