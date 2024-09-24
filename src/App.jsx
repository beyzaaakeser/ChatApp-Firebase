import React from 'react';
import './App.css';
import { useState } from 'react';
import { auth, provider } from './firebase/firebase';
import { signInWithPopup } from 'firebase/auth';

const App = () => {
  const [user, setUser] = useState(null);
  const handleClick = () => {
    signInWithPopup(auth, provider)
      .then((response) => setUser(response.user))
      .catch((err) => console.log(err + 'İşlem Başarısız'));
  };
  console.log(user);
  return (
    <>
      <div>
        {user ? (
          <div>
            <img
              src={`${user?.photoURL}`}
              alt="User Profile"
              style={{ width: '96px', height: '96px', borderRadius: '50%' }}
              onError={() => console.log('Resim yüklenemedi')}
            />
            <h3>{user.displayName}</h3>
            <h4>{user.email}</h4>
          </div>
        ) : (
          <button onClick={handleClick}>Google ile giriş yap</button>
        )}
      </div>
    </>
  );
};

export default App;
