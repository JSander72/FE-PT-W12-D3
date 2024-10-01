import React from 'react'
import { useState } from 'react'
import ReusableButton from './ReusableButton'

// We can use props to pass through the users list
// Can also be written as ( { users } ) 
const UserList = (props) => {
  const [users, setUsers] = useState(props.users)

  // Let's write a function to delete users from the list
  const deleteUser = (index) => {
    // The filter method removes the user from the list
      // The index to find the user we want to remove (this is why key is important)
      // The setUsers function to update the list
    const newUsers = users.filter((user, i) => i !== index)
    setUsers(newUsers)
  }

  return (
    <div>
      <h1>List of Users</h1>
      {/* { users.map((user, index) => <p>{user}</p> )} */}

      {/* Let's add the reusable button component to the user */}
      { users.map((user, index) => 
        <div key={index}>
          <p>{user}</p>

          <ReusableButton handleClick={() => deleteUser(index)}/>
          {/* <button onClick={() => deleteUser(index)}>Click Me</button> */}

        </div>
      )}
    </div>
  )
}

// We can use props to set a default value for this list so the page isn't empty when it loads 
UserList.defaultProps = {
  users: ["Jake Default", "Sally Default", "Sarah Default"]
}

export default UserList