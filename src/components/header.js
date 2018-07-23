import React from 'react'
import Link  from 'gatsby-link'
import logo  from '../assets/images/logo.png'
import NavLinkBar from './navLinkBar'

import '../assets/stylesheets/header.css'


const Header = (props) => (
  <nav className="navbar navbar-default navbar-expand-md navbar-light fixed-top">
    <div className='container'>
      <Link className="navbar-brand" to="#">
        <img src={ logo } alt='logo' width={32}/>
      </Link>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#main-menu" aria-controls="main-menu" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      
      <div className="collapse navbar-collapse" id="main-menu">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="nav-link" to="/">HOME</Link>
          </li>
          <li className="nav-item">
            <NavLinkBar attributeName="team" location={props.location}/>
          </li>
          <li className="nav-item">
            <NavLinkBar attributeName="news" location={props.location}/>
          </li>
          <li className="nav-item">
            <NavLinkBar attributeName="career" location={props.location}/>
          </li>
          <li className="nav-item">
            <NavLinkBar attributeName="contact" location={props.location}/>
          </li>
        </ul>
      </div>
    </div>
  </nav>
)

export default Header
