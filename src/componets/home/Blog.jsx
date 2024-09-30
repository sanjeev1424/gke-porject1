import React from 'react';
import "./blog.scss"
import { useNavigate } from 'react-router-dom';


const Blog = () => {
    const navigate=useNavigate();
    const handleNavigate = () => {
        // Navigate to the "About" page
        navigate('/');
      };
    
  const posts = [
    {
      title: 'First Blog Post',
      date: 'September 27, 2024',
      content: 'This is the content of the first blog post. It’s all about learning React and JSX.'
    },
    {
      title: 'Second Blog Post',
      date: 'September 25, 2024',
      content: 'Here’s another post. We’re diving deeper into state management and component structure.'
    },
    {
      title: 'Third Blog Post',
      date: 'September 20, 2024',
      content: 'In this post, we explore React hooks and their impact on functional components.'
    }
  ];

  return (
    <div className="blog-page">
      <header>
        <h1>My Awesome Blog</h1>
        <nav>
          <ul>
            <li ><button onClick={handleNavigate}>Home</button></li>
            
          </ul>
        </nav>
      </header>

      <main>
        {posts.map((post, index) => (
          <article key={index} className="blog-post">
            <h2>{post.title}</h2>
            <p className="date">{post.date}</p>
            <p>{post.content}</p>
          </article>
        ))}
      </main>

      <footer>
        <p>&copy; 2024 My Awesome Blog. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Blog;
