import React from 'react';
import { PostProps } from '@/interfaces';

const PostCard: React.FC<PostProps> = ({ title, content, userId }) => {
  return (
    <div className="post-card border rounded-md p-4 shadow-md">
      <h3 className="text-lg font-bold">{title}</h3>
      <p className="text-gray-700">{content}</p>
      <p className="text-sm text-gray-500">Posted by User {userId}</p>
    </div>
  );
};

export default PostCard;
