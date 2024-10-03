import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';

const AxiosUserDetail = () => {
  // useParams is a hook that allows us to access parameters from the current route 
  // we access the id parameter from the route  /axios-users/:id/
  // is deconstructed in the order it appears in the route 
  const { id } = useParams()
  const [user, setUser] = useState(null); // set to null by default 

  const [loading, setLoading] = useState(true) 

  // Old function written like promise
  const getUserInfo = (id) => {
    axios.get(`https://fakestoreapi.com/users/${id}`)
      .then(response => {
        console.log(response)
        setSelectedUserInfo(response.data)
      })
      .catch(error => {
        console.log(error)
      })
  }

  useEffect(()=> {
    const fetchUser = async () => {
      try { 
        const response = await axios.get(`https://fakestoreapi.com/users/${id}`)
        console.log(response)
        setUser(response.data)
        setLoading(false)
      } catch (error) {
        console.log(error)
      }
    }

    fetchUser(); 

  }, [id])

  if (loading){
    return <p>Loading...</p>
  }

  return (
    <div>

      {/* {user && 
          <>
            <h2>{user.username}</h2>
            <p>{user.username}</p>
          </>
      } */}

      {user ? (
        <>
          <h2>{user.username}</h2>
          <p>{user.email}</p>
          <p>{user.phone}</p>
          <p>{user.website}</p>
          <Link to='/axios-users'>Back to Users</Link>
        </>
      ) : (
        <> 
          <p>No User Found</p>
        </>
      )}

      

    </div>
  )
}

export default AxiosUserDetail