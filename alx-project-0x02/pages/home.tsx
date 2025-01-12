import React, { useState } from 'react';
import PostModal from '@/components/common/PostModal';
import Header from '@/components/layout/Header';
import Card from '@/components/common/Card';

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
            <Header/>
      
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
            <Card title={post.title} content={post.content} key={index}/>
          ))
        )}
      </div>

            
        </div>
    );
}

export default home;
