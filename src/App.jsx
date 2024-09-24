import React, { useState } from 'react';
import LoginPage from './pages/LoginPage';
import RoomPage from './pages/RoomPage';
import { auth } from './firebase/firebase.js';

console.log(auth.currentUser)

const App = () => {
  const [isAuth, setIsAuth] = useState(localStorage.getItem('token') || false);

  if (!isAuth) return <LoginPage setIsAuth={setIsAuth} />;

  return (
    <div className='container'>
      <RoomPage setIsAuth={setIsAuth}/>
    </div>
  );
};

export default App;
