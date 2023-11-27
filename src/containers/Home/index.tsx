import React from 'react';
import { Link } from 'react-router-dom';
import UserList from '../UserList';

const HomePage: React.FC = () => {
  return (
    <div className="container mx-auto mt-8 p-4 sm:p-0">
      <h1 className="text-4xl font-bold mb-2 text-center">Welcome to our users portal</h1>
      <div className="flex flex-col md:flex-row justify-center gap-4">
        <UserList />
      </div>
    </div>
  );
};

export default HomePage;
