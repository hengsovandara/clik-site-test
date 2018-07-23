import React from "react"
import Link from 'gatsby-link'
import * as Scroll from 'react-scroll';

let LinkTo    = Scroll.Link;

const NavLinkBar = (props) => {
  const path     = props.location.pathname
  const backPath = "/#"+props.attributeName

  if(path.match(/\job\//)){
    return (
      <Link className="nav-link" to={backPath}>{props.attributeName}</Link>
    )
  }else{
    return(
      <LinkTo className="nav-link" to={props.attributeName} offset={-50} spy={true} smooth={true}>{props.attributeName}</LinkTo>
    )
  }
}

export default NavLinkBar;