import { useState } from 'react'
import UserList from './components/UserList'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <UserList/>
    </>
  )
}

export default App
