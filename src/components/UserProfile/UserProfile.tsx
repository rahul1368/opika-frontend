import React, { useState } from 'react';
import './UserProfile.css';

interface UserProfileProps {
  name: string;
  imageSrc: string;
  bio: string;
  email: string;
  isHideEmailToggleButton?: boolean;
}

const UserProfile: React.FC<UserProfileProps> = ({ name, imageSrc, bio, email, isHideEmailToggleButton = false }) => {
  const [showEmail, setShowEmail] = useState(false);

  const handleToggleEmail = () => {
    setShowEmail((state) =>!state);
  };

  return (
    <div className="userProfile">
      <div className="userCard">
        <img
          alt="user photo"
          src={imageSrc}
          className="avatar"
        />
        <span className="heading">
          <h1 className="name">{name}</h1>
        </span>
        {(!isHideEmailToggleButton ? showEmail : true) && <span className="email">{email}</span>}
        <div className="content">{bio}</div>  
        {!isHideEmailToggleButton && <button className="toggleEmail" onClick={handleToggleEmail}>{showEmail ? "Hide Email" : "Show Email"}</button>}  
      </div>
  </div>
  );
};

export default UserProfile;
