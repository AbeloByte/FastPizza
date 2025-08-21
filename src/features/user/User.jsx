import React from 'react';
import { useSelector } from 'react-redux';

const User = () => {
  const username = useSelector((state) => state.user.username);
  return <div className="text-sm font-semibold md:block">{username}</div>;
};

export default User;
