import React from 'react';

const Header = () => {
  return (
    <div className='grid grid-cols-3 gap-4'>
      <a href="/home">Home</a>
      <a href="/about">About Us</a>
      <a href="/posts">Posts</a>
    </div>
  );
}

export default Header;
