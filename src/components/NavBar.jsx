import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import '../styles/nav.css'

const NavBar = () => {
  return (
    <div className='navbar-container'>

      {/* Acts like <a href="#home"> tag */}
      <Link to="/">Home</Link>

      {/* Also acts like a tag but allows you to assign "active" classname in addition */}
      <nav>
        <NavLink to="/users" activeClassName="active">Users</NavLink>
        <NavLink to="/axios-users" activeClassName="active">Axios Users</NavLink>
      </nav>
      
    </div>
  )
}

export default NavBar