import React from 'react';
import Link from 'next/link';

const Header = () => {
  return (
    <div className='grid grid-cols-3 gap-4'>
      <Link href="/home">Home</Link>
      <Link href="/about">About Us</Link>
      <Link href="/posts">Posts</Link>
    </div>
  );
}

export default Header;
