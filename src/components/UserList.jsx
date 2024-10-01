import React from 'react'
import { useState } from 'react'

// We can use props to pass through the users list
const UserList = (props) => {
  const [users, setUsers] = useState(props.users)

  return (
    <div>
      <h1>List of Users</h1>
      { users.map((user, index) => <p>{user}</p> )}
    </div>
  )
}

// We can use props to set a default value for this list so the page isn't empty when it loads 
UserList.defaultProps = {
  users: ["Jake Default", "Sally Default", "Sarah Default"]
}

export default UserList