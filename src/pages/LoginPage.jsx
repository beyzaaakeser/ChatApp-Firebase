import React from 'react';
import { signInWithPopup } from 'firebase/auth';
import { auth, provider } from '../firebase';

const LoginPage = ({ setIsAuth }) => {
  const handleClick = () => {
    signInWithPopup(auth, provider)
      .then((res) => {
        setIsAuth(true);
        localStorage.setItem('token', res.user.refreshToken);
        console.log(res.user);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="container">
      <div className="login">
        <div>
          <img src="/public/chatLogo.png" alt="" />
          <h1>Chat Room</h1>
        </div>

        <p>Log in to continue</p>
        <button onClick={handleClick}>
          <img width={30} src="/public/google-icon.png" alt="google" />
          <span>Sign in with Google</span>
        </button>
      </div>
    </div>
  );
};

export default LoginPage;
