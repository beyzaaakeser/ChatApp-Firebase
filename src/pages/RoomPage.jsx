import { signOut } from 'firebase/auth';
import React from 'react';
import { auth } from '../firebase/firebase';

const RoomPage = ({ setIsAuth }) => {
  const logout = () => {
    setIsAuth(false);
    localStorage.removeItem("token")
    signOut(auth)
  };

  return (
    <form className="room-page">
      <h1>Chat Room</h1>
      <p>Which chat room do you want to enter?</p>

      <input type="text" placeholder="Exp:Art" required />

      <button>Enter Room</button>
      <button onClick={logout}>Log Out</button>
    </form>
  );
};

export default RoomPage;
