// import React, { useState } from 'react';

// const CreateUserForm1 = () => {
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const user = { name, email, password };

//     try {
//       const response = await fetch('https://fakestoreapi.com/users', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(user),
//       });

//       // If the response is ok, log the data and alert the user
//       if (response.ok) {
//         const data = await response.json();

//         console.log('User created:', data);
//         // Alert the user that the user was created
//         alert(`User created with an id of ${data.id}`);

//         // Reset the form
//         setName('');
//         setEmail('');
//         setPassword('');

//       } else {
//         console.error('Failed to create user');
//       }
//     } catch (error) {
//       console.error('Error:', error);
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <div>
//         <label>Name:</label>
//         <input
//           type="text"
//           value={name}
//           onChange={(e) => setName(e.target.value)}
//           required
//         />
//       </div>
//       <div>
//         <label>Email:</label>
//         <input
//           type="email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           required
//         />
//       </div>
//       <div>
//         <label>Password:</label>
//         <input
//           type="password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           required
//         />
//       </div>
//       <button type="submit">Create User</button>
//     </form>
//   );
// };
