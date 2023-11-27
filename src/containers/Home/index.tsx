import React from 'react';
import UserList from '../UserList';
import UserForm from '../../components/AddOrEditUser';
import handleApiCall from '../../apiService';

const HomePage: React.FC = () => {
    const handleOnSubmit = (data: any) => {
        console.log("form", data);
        data.password = 'password123';
        handleApiCall("auth/register", "POST", data);
    }
  return (
    <div className="container mx-auto mt-8 p-4 sm:p-0">
      <h1 className="text-4xl font-bold mb-2 text-center">Welcome to our users portal</h1>
      <div className='container m-8'>
        <UserForm onSubmit={handleOnSubmit} />
      </div>
      <div className="flex flex-col md:flex-row justify-center gap-4">
        <UserList />
      </div>
    </div>
  );
};

export default HomePage;
