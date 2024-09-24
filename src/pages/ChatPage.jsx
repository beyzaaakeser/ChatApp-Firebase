import React from 'react'
import { auth } from '../firebase/firebase'


const ChatPage = ({room,setRoom}) => {
  return (
    <div className='chat-page'>

        <header>
          <p>{auth.currentUser.displayName}</p>
          <p>{room}</p>

          <button onClick={() => setRoom(null)}>Change Chat Room</button>
        </header>

        <main>
          messages
        </main>

        <form className='message-form'>
          <input type="text" placeholder='Message'/>
          <button type='submit'>Send</button>
        </form>
    </div>
  )
}

export default ChatPage