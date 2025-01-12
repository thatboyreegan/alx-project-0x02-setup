
import { CardProps } from '@/interfaces';
import React from 'react';

const Card: React.FC<CardProps> = ({title, content}) => {
  return (
    <div className='grid gap-4 w-3/4 bg-white text-black h-60'>
      <h1 className='p-4'>{title}</h1>
      <p>{content}</p>
    </div>
  );
}

export default Card;
