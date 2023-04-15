import React, { useContext } from 'react';
import { AuthContext } from '../provider/AuthProvider';

const Home = () => {
  const {user} = useContext(AuthContext);
  console.log(user)
  return (
    <div>
      <h2>This Is Home {user && <span>{user.displayName}</span>}</h2>
    </div>
  );
};

export default Home;