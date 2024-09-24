import React, { useState } from 'react'
import LoginPage from './pages/LoginPage'
import RoomPage from './pages/RoomPage'

const App = () => {
  const [isAuth, setIsAuth] = useState(false)

  if(!isAuth) return <LoginPage setIsAuth={setIsAuth}/>

  return (
    <div>
      <RoomPage/>
    </div>
  )
}

export default App