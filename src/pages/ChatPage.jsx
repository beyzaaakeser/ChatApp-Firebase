import React, { useState } from 'react';
import { auth, db } from '../firebase';
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';

const ChatPage = ({ room, setRoom }) => {
  const [text, setText] = useState('');
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (text.trim() === '') return;

    const messagesCol = collection(db, 'messages');

    await addDoc(messagesCol, {
      text,
      room,
      author: {
        id: auth.currentUser.uid,
        name: auth.currentUser.displayName,
        photo: auth.currentUser.photoURL,
      },
      createdAt: serverTimestamp(),
    });
  };

  return (
    <div className="chat-page">
      <header>
        <p>{auth.currentUser.displayName}</p>
        <p>{room}</p>

        <button onClick={() => setRoom(null)}>Change Chat Room</button>
      </header>

      <main>messages</main>

      <form onSubmit={handleSubmit} className="message-form">
        <input
          onChange={(e) => setText(e.target.value)}
          type="text"
          placeholder="Message"
        />
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default ChatPage;
