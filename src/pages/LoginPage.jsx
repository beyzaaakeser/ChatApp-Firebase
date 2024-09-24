import React  from 'react';
import { auth, provider } from '../firebase/firebase';
import { signInWithPopup } from 'firebase/auth';

const LoginPage = ({setIsAuth}) => {
 
  const handleClick = () => {
    signInWithPopup(auth, provider)
      .then((res) => setIsAuth(true))
      .catch((err) => console.log(err));
  };
  
  return (
    <div className="container">
      <div className="login">
        <h1>Chat Room</h1>
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
