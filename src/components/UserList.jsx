import React from 'react'
import { useState } from 'react'

const UserList = (props) => {
  // users is now equal to an empty list
  const [users, setUsers] = [props.users]

  return (
    <div>
      <h1>List of Users</h1>
      { users.map((user, index) => <p>{user}</p> )}
    </div>
  )
}

// We can use props to set a default value for this list so the page isn't empty when it loads 
UserList.defaultProps = {
  users: ["Jake", "Sally", "Sarah"]
}

export default UserList