import React, { useEffect } from 'react'
import { useState } from 'react'
import ReusableButton from './ReusableButton'
import axios from 'axios'
import CreateUserForm from './CreateUserForm'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

const AxiosUserList = () => {
  // Initializing the users state with an empty array
  const [users, setUsers] = useState([])
  const [selectedUser, setSelectedUser] = useState(null)
  const [selectedUserInfo, setSelectedUserInfo] = useState(null)

  const navigate = useNavigate()

  const deleteUser = (index) => {
    const newUsers = users.filter((user, i) => i !== index)
    setUsers(newUsers)
  }

  const selectUser = (id) => {
    setSelectedUser(id)
    navigate(`/axios-users/${id}`)
    // getUserInfo(id)
  }

  // Let's write a function to get more information about the selected user
  const getUserInfo = (id) => {
    // promise (fullfill, reject).then().catch() 
    axios.get(`https://fakestoreapi.com/users/${id}`)
      .then(response => {
        console.log(response)
        setSelectedUserInfo(response.data)
      })
      .catch(error => {
        console.log(error)
      })
  }

  // We are going to load users from the fakestoreapi using axios and useEffect
  // We will use the useEffect hook to make a request to the fakestoreapi
  // We will use the axios library to make the request

  useEffect(() => {
    axios.get('https://fakestoreapi.com/users')
      .then(response => {
        // first we log the response to make sure we are getting the data we want
        // The response from the fakestoreapi is an object with a data property that contains the users
        console.log(response)

        // We can use the setUsers function to update the users state with the users from the response
        setUsers(response.data)
        
      })
      .catch(error => {
        console.log(error)
      })
  }, [])




  return (
    <div>

      <h3>Create User</h3>
      <CreateUserForm />

      <h1>List of Users</h1>

      { selectedUserInfo && 
        <div>
          <h3>Selected User</h3>
          {/* <p>{selectedUser}</p> */}

          {/* Make a card to display user info */}
          <p>{selectedUserInfo.name.firstname}</p>
          <p>{selectedUserInfo.name.lastname}</p>
          <p>{selectedUserInfo.email}</p>
          
        </div>
      }

      <h3>Users</h3>

      { users.map((user, index) => 
        <div key={index}>
          <p>{user.name.firstname}</p>

          <ReusableButton handleClick={() => deleteUser(index)} title="Delete User"/>
          <br />
          <ReusableButton handleClick={() => selectUser(user.id)} title="Select User"/>

          <Link to={`/axios-users/${user.id}`}>Details</Link>

        </div>
      )}
    </div>
  )
}

export default AxiosUserList