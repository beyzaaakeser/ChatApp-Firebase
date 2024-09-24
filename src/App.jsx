import React, { useState } from 'react';
import LoginPage from './pages/LoginPage';
import RoomPage from './pages/RoomPage';
import { auth } from './firebase/firebase.js';
import ChatPage from './pages/ChatPage';


const App = () => {
  const [isAuth, setIsAuth] = useState(localStorage.getItem('token') || false);
  const [room, setRoom] = useState(null);
  console.log(room);
  if (!isAuth) return <LoginPage setIsAuth={setIsAuth} />;

  return (
    <div className="container">
      {room ? (
        <ChatPage room={room} setRoom={setRoom}/>
      ) : (
        <RoomPage setIsAuth={setIsAuth} setRoom={setRoom} />
      )}
    </div>
  );
};

export default App;
