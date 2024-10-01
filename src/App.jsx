import { useState } from 'react'
import UserList from './components/UserList'
import AxiosUserList from './components/AxiosUserList'

function App() {
  const [users, setUsers] = useState(["Jake", "Sally", "Sarah"])

  return (
    <>
      {/* We can pass through users as an argument to the user list component */}
      {/* This works because users will be read as props.users */}
      {/* <UserList users={users}/> */}

      {/* If we change the name of the user parameter to something else, like userList it will not work and it will display the default*/}
      {/* <UserList userList={users}/> */}

      <AxiosUserList />
    </>
  )
}

export default App
