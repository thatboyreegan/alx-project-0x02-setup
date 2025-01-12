import React, { useState } from 'react';
import Card from '@/components/layout/common/Card';
import PostModal from '@/components/layout/common/PostModal';

const home = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [posts, setPosts] = useState<{ title: string; content: string }[]>([]);

    const handleAddPost = (newPost: { title: string; content: string }) => {
        setPosts((prevPosts) => [...prevPosts, newPost]);
    };
    return (
        <div className=''>
            <h1>Home</h1>
            <button onClick={() => setIsModalOpen(true)}>Add New Post</button>
      
      <PostModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSave={handleAddPost}
      />
       <div className="posts">
        {posts.length === 0 ? (
          <p>No posts yet. Add a new post!</p>
        ) : (
          posts.map((post, index) => (
            <div key={index} className="post">
              <h3>{post.title}</h3>
              <p>{post.content}</p>
            </div>
          ))
        )}
      </div>

            
        </div>
    );
}

export default home;
