import React from 'react';
import Card from '@/components/layout/common/Card';

const home = () => {
  return (
    <div className='grid grid-cols-3'>
      
      <Card title='First Card' content='This is the content of this card'/>
      <Card title='First Card' content='This is the content of this card'/>
      <Card title='First Card' content='This is the content of this card'/>

    </div>
  );
}

export default home;
