import React from 'react';
import {NavLink, Link} from 'react-router-dom'


const NavBar = () => {
  return ( 
    <nav className="navbar navbar-light bg-light">
      <div className="navbar-nav d-flex flex-row ml-4">
        <Link to="/" className="navbar-brand">
          Vidly
        </Link>
        <NavLink to="/movies" className="nav-link ml-5">Movies</NavLink>
        <NavLink to="/customers" className="nav-link ml-5">Customers</NavLink>
        <NavLink to="/rentals" className="nav-link ml-5">Rentals</NavLink>
        </div>
    </nav>
   );
}
export default NavBar;