import React from 'react';
import {NavLink} from "react-router-dom"; //add an html attribute class if we are on the link we link to
// NavLink is used to create links
import {CurrentDateTime} from "./CurrentDateTime";

function NavBar(props){ //if you dont have any states in a componoent, just use a regular function and not a class
  const{user, onSignOut = () => {}} = props;
  const handleSignout = event => {
    event.preventDefault();
    onSignOut(); //call onSignOut when the button gets clicked so you know what to do to sign out the user 
  }

  return(
    <nav className="NavBar">
      <NavLink exact to="/">Home</NavLink>
      <NavLink exact to="/questions">Questions</NavLink>
      <NavLink exact to="/questions/new">Add New</NavLink>

      {user? (
        [
          <span>Hello, {user.first_name}!</span>,
          <a href="" onClick={handleSignout}>Sign Out</a>
        ].map((el, i) => React.cloneElement(el, {key: i}))
      ) : (
        <NavLink exact to="/sign_in">Sign In</NavLink>
      )

      }
      <CurrentDateTime />
    </nav>
  )
}

export {NavBar};
