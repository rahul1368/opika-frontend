import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import UserProfile from '../../components/UserProfile';
import { IUser } from '../../models/user.model';
import handleApiCall from '../../apiService';

const UserList: React.FC = () => {
  const [users, setUsers] = useState<IUser[]>([]);

  useEffect(() => {
    // Fetch users from the API endpoint
    handleApiCall("users")
      .then((data) => setUsers(data.results))
      .catch((error) => console.error('Error fetching users:', error));
  }, []);

  return (
    <div className="container mx-auto mt-2 p-4">
      <h2 className="text-2xl mb-24 sm:mb-6 md:mb-8 lg:mb-10 xl:mb-12 2xl:mb-16 text-center">Explore detailed user profiles by clicking on the respective profile cards.</h2>
      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-1 md:gap-8 gap-16 sm:gap-16">
        {users.map((user) => (
          <Link to={`/user-profile/${user.id}`} key={user.id}>
            <UserProfile
                name={user?.name}
                email={user?.email}
                bio={user?.bio}
                imageSrc={user?.profilePicture}
                isHideEmailToggleButton
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default UserList;
