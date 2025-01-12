import React, { useEffect, useState } from 'react';
import Header from '@/components/layout/Header';
import { Post } from '@/interfaces';
import PostCard from '@/components/layout/common/PostCard';

const posts = () => {
    const [posts, setPosts] = useState<Post[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        const data = await response.json();
        setPosts(data);
      } catch (error) {
        console.error('Error fetching posts:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchPosts();
  }, []);
    return (
        <div className='p-4'>
            <Header />
            <h1 className="text-2xl font-bold mb-4">Posts</h1>
      {isLoading ? (
        <p>Loading posts...</p>
      ) : (
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <PostCard
              key={post.id}
              title={post.title}
              content={post.body}
              userId={post.userId}
            />
          ))}
        </div>
      )}
        </div>

    );
}

export default posts;