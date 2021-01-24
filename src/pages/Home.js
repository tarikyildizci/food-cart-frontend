import React, { useContext } from 'react';
import { UserContext } from '../context/UserContext';

const Home = () => {
  const { user, setUser } = useContext(UserContext);
  return <div>{user ? user.name : 'Loading'}</div>;
};

export default Home;
