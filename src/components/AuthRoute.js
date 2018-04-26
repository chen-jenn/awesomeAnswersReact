import React from 'react'
import {Redirect, Route} from "react-router-dom"

function AuthRoute(props){ //AuthRoute used in place of the route component; replacing the route componnent and changing its behaviour slightly by having an additional prop (isAuthenticated)
  // Taking a component as a prop makes this a HIGHER ORDER COMPONENT
  const {
    component: Component, //component is passed as a prop so you can then render it. otherwise React will not recognize the lowercase and think it is an html tag. if everything is authenticated, then we are rendering this component
    isAuthenticated = false,
    ...restProps
  } = props;

  return(
    <Route
      {...restProps}
      render={
        props => isAuthenticated ? (
          <Component {...props} />
        ) : (
          <Redirect to="/sign_in" />
        )
      }
    />
  );
}

export {AuthRoute};
