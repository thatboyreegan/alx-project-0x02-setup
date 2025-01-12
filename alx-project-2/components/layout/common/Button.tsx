import React from 'react';
import { ButtonProps } from '@/interfaces';


const Button: React.FC<ButtonProps> = ({ size = 'medium', shape = 'rounded-md', onClick, children }) => {

    const sizeClasses = {
        small: 'py-1 px-3 text-sm',
        medium: 'py-2 px-4 text-base',
        large: 'py-3 px-6 text-lg',
      };
    
      const shapeClasses = {
        'rounded-sm': 'rounded-sm',
        'rounded-md': 'rounded-md',
        'rounded-full': 'rounded-full',
      };
    
  return (
    <button className= {`bg-blue-500 text-white ${sizeClasses[size]} ${shapeClasses[shape]} hover:bg-blue-600 transition duration-200`} onClick={onClick}>
        {children}
    </button>
  );
}

export default Button;
