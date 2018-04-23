import React from 'react';
import {NavLink} from "react-router-dom"; //add an html attribute class if we are on the link we link to
// NavLink is used to create links
import {CurrentDateTime} from "./CurrentDateTime";

function NavBar(props){ //if you dont have any states in a componoent, just use a regular function and not a class
  return(
    <nav className="NavBar">
      <NavLink exact to="/">Home</NavLink>
      <NavLink exact to="/questions">Questions</NavLink>
    </nav>
  )
}

export {NavBar};
