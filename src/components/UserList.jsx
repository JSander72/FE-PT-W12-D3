import React from 'react'

const UserList = () => {
  const users = ["John", "Sally", "Sarah"]

  return (
    <div>
      <h1>List of Users</h1>
      { users.map((user, index) => <p>{user}</p> )}
    </div>
  )
}

export default UserList