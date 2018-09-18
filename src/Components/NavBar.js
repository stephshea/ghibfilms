import React from 'react'
import { Link, NavLink, withRouter } from 'react-router-dom'

const Navbar = (props) => {
  // setTimeout(() => {
  //   props.history.push('/Weather')
  // }, 2000)

  return (
   <nav className="nav-wrapper blue darken-3">
     <div className= "container">
      <ul className="right">
        <li><Link to="/">Home</Link></li>
        <li><NavLink to="/About">About</NavLink></li>
        <li><NavLink to="/FilmList">FilmList</NavLink></li>
        <li><NavLink to="/Weather">Weather</NavLink></li>
      </ul>
     </div>
   </nav>  
  )
}

export default withRouter(Navbar)