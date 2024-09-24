import { signOut } from 'firebase/auth';
import { auth } from '../firebase/firebase';

const RoomPage = ({ setIsAuth, setRoom }) => {
  const logout = () => {
    setIsAuth(false);
    localStorage.removeItem('token');
    signOut(auth);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const room = e.target[0].value.toUpperCase();
    setRoom(room);
  };

  return (
    <form onSubmit={handleSubmit} className="room-page">
      <h1>Chat Room</h1>
      <p>Which chat room do you want to enter?</p>

      <input type="text" placeholder="Exp:Art" required />

      <button type="submit">Enter Room</button>
      <button type="button" onClick={logout}>
        Log Out
      </button>
    </form>
  );
};

export default RoomPage;
