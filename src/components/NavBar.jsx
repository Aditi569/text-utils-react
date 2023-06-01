// ignore that 10k tool its related to github
import React from 'react';
import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom';



const NavBar = (props) => {
  return (
    //Here i Passed props variable name. got it
    <>
      <nav className={`navbar navbar-expand-lg navbar-${props.Mode} bg-${props.Mode}`}>
        <div className="container-fluid">
          <NavLink className="navbar-brand" to="/">{props.title}</NavLink>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link active" aria-current="page" to="/">Home</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/about">About</NavLink>
              </li>
            </ul>
            {/* <form className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-success" type="submit">Search</button>
            </form> */}
            <div className={`form-check form-switch text-${props.Mode === 'light' ? 'dark' : 'light'}`}>
              <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
              <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable dark mode</label>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

NavBar.propTypes = {
  title: PropTypes.string.isRequired,  // proptypes uses for validating the props
}

NavBar.defaultProps = {
  title: 'set-tittle here'
}

export default NavBar;

// 4. here need to import Link in place of anchor(a tag) (because this is react)