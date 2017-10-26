import React, { Component } from 'react';

const Profile = ({userName,avatar}) => {
  return(
    <div>
      <h3>{userName}</h3>
      <img src={avatar}/>
    </div>
  )
}

export default Profile;
