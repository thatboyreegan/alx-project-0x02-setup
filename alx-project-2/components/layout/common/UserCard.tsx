import React from 'react';
import { UserProps } from '@/interfaces';

const UserCard: React.FC<UserProps> = ({ name, email, address }) => {
  return (
    <div className="user-card border rounded-md p-4 shadow-md">
      <h3 className="text-lg font-bold">{name}</h3>
      <p className="text-gray-700">Email: {email}</p>
      <p className="text-gray-500">
        Address: {address.street}, {address.suite}, {address.city}, {address.zipcode}
      </p>
    </div>
  );
};

export default UserCard;
