import React, { useEffect, useRef, useState } from 'react';
import { auth, db } from '../firebase';
import {
  addDoc,
  collection,
  onSnapshot,
  serverTimestamp,
  query,
  where,
  orderBy,
} from 'firebase/firestore';
import Message from '../components/Message';
import EmojiPicker from 'emoji-picker-react';

const ChatPage = ({ room, setRoom }) => {
  const [text, setText] = useState('');
  const [messages, setMessages] = useState([]);
  const [isOpen, setIsOpen] = useState(false)
  const lastMsg = useRef();
  const handleSubmit = async (e) => {
    e.preventDefault();
    setText('');

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

  useEffect(() => {
    const messagesCol = collection(db, 'messages');
    const q = query(
      messagesCol,
      where('room', '==', room),
      orderBy('createdAt', 'asc')
    );
    const unSub = onSnapshot(q, (data) => {
      let temp = [];
      data.docs.forEach((doc) => {
        temp.push(doc.data());
      });
      setMessages(temp);
    });

    return () => {
      unSub();
    };
  }, []);

  useEffect(() => {
    lastMsg.current.scrollIntoView();
  }, [messages]);

  return (
    <div className="chat-page">
      <header>
        <p>{auth.currentUser.displayName}</p>
        <p>{room}</p>

        <button onClick={() => setRoom(null)}>Change Chat Room</button>
      </header>

      <main>
        {messages.length < 1 ? (
          <div className="warn">
            <p>Send first message to chat</p>
          </div>
        ) : (
          messages.map((data, key) => <Message key={key} data={data} />)
        )}

        <div ref={lastMsg} />
      </main>

      <form onSubmit={handleSubmit} className="message-form">
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          type="text"
          placeholder="Message"
        />
        <div>
          <EmojiPicker open={isOpen} />
          <button type='button' onClick={() => setIsOpen(!isOpen)}>😉</button>
        </div>

        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default ChatPage;
