// Profile.js 

import React from 'react';

const Profile = ({person}) => {

  const {fullName, bio, imgSrc} = person;

  return (
    <div>
      <h2>{fullName}</h2>

      <p>{bio}</p>

      <img src={imgSrc} alt={fullName}/>

    </div>
  );
}

export default Profile;
