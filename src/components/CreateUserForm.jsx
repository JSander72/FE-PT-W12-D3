import { useState } from 'react'

const CreateUserForm = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault(); 

    const user = {name, email, password}
    console.log(user)

    try {

      // We want to upload our user to the API 
      const response = await fetch("https://fakestoreapi.com/users", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json' 
        },
        body: JSON.stringify(user)
      })


      // We we want to check the response to see if the user was successfully created
      if (response.ok){
        const data = await response.json();

        console.log("User Created:", data)
        alert(`User created with an id of ${data.id}`)

        // Reset the form 
        setName('')
        setEmail('')
        setPassword('')
      }

    } catch (error){
      console.log("Error", error)
    }
  }


  return (
    <div>
      <form onSubmit={handleSubmit}>

        {/* Name section */}
        <div>
          <label>Name:</label>
          <input type='text' value={name} onChange={(e) => setName(e.target.value) } required/>
        </div>

        <br />

        {/* Email section */}
        <div>
          <label>Email:</label>
          <input type='email' value={email} onChange={(e) => setEmail(e.target.value) }/>
        </div>

        <br />

        {/* Password section */}
        <div>
          <label>Password:</label>
          <input type='password' value={password} onChange={(e) => setPassword(e.target.value) }/>
        </div>

        <br />

        <button type='submit'>Create User</button>

      </form>
    </div>
  )
}

export default CreateUserForm