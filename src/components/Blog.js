// components/Blog.js
import React from 'react';
import './Blog.css';

const Blog = () => {
  const videos = [
    { id: 'xNN7iTA57jM', title: 'Ghost Treinamentos 1' },
    { id: 'xNN7iTA57jM', title: 'Ghost Treinamentos 2' },
    { id: 'xNN7iTA57jM', title: 'Ghost Treinamentos 3' },
    { id: 'xNN7iTA57jM', title: 'Ghost Treinamentos 4' },
    { id: 'xNN7iTA57jM', title: 'Ghost Treinamentos 5' },
    { id: 'xNN7iTA57jM', title: 'Ghost Treinamentos 6' },
    { id: 'xNN7iTA57jM', title: 'Ghost Treinamentos 7' },
    { id: 'xNN7iTA57jM', title: 'Ghost Treinamentos 8' },
    { id: 'xNN7iTA57jM', title: 'Ghost Treinamentos 9' },
    { id: 'xNN7iTA57jM', title: 'Ghost Treinamentos 10' },
    { id: 'xNN7iTA57jM', title: 'Ghost Treinamentos 11' },
    { id: 'xNN7iTA57jM', title: 'Ghost Treinamentos 12' },
  ];

  return (
    <div>
      <h2>Blog</h2>
      <div className="videos">
        {videos.map((video) => (
          <div key={video.title} className="video">
            <h3>{video.title}</h3>
            <iframe
              src={`https://www.youtube.com/embed/${video.id}`}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title={video.title}
            ></iframe>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
