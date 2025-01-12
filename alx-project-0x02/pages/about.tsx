import Button from '@/components/layout/common/Button';
import React from 'react';
import Header from '@/components/layout/Header';

const about = () => {
  return (
    <div>
        <Header/>
        <div>
      <h1>This is the about page</h1>
      <div className="space-y-4">
        <Button size="small" shape="rounded-sm" onClick={() => alert('Small Button Clicked')}>
          Small Button
        </Button>
        <Button size="medium" shape="rounded-md" onClick={() => alert('Medium Button Clicked')}>
          Medium Button
        </Button>
        <Button size="large" shape="rounded-full" onClick={() => alert('Large Button Clicked')}>
          Large Button
        </Button>
      </div>
    </div>
    </div>
    
  );
}

export default about;
