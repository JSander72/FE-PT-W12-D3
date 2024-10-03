import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const NotFound = () => {
  const navigate = useNavigate()

  setTimeout(() => {
    navigate('/')
  }, 5000) // Navigate to the home screen after 5 seconds

  return (
    <div>
      <h1>404</h1>
      <p>Page Not Found</p>

      <Link to="/">Go back to Home</Link>
    </div>
  );
}

export default NotFound;