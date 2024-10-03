import { useState } from 'react'
import UserList from './components/UserList'
import AxiosUserList from './components/AxiosUserList'
import NavBar from './components/NavBar'
import {Routes, Route} from 'react-router-dom'
import Home from './components/Home'
import NotFound from './components/NotFound'
import AxiosUserDetail from './components/AxiosUserDetail'

function App() {
  const [users, setUsers] = useState(["Jake", "Sally", "Sarah"])

  return (
    <>
      <NavBar />

      {/* Container for all the routes */}
      <Routes>
        <Route path='/' element={<Home/>}/>

        <Route path='/users' element={<UserList users={users} />} />

        <Route path='/axios-users' element={<AxiosUserList />} />
        {/* Notice that the navigation works even though we didn't add it to our navbar */}
        <Route path='/axios-users/:id' element={<AxiosUserDetail/>} />

        {/* Catch all Route - PUT IT AT THE BOTTOM */}
        <Route path='*' element={<NotFound/>} />

      </Routes>

    </>
  )
}

export default App


{/* We can pass through users as an argument to the user list component */}
{/* This works because users will be read as props.users */}
{/* <UserList users={users}/> */}

{/* If we change the name of the user parameter to something else, like userList it will not work and it will display the default*/}
{/* <UserList userList={users}/> */}

// <AxiosUserList />