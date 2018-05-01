//https://github.com/CodeCoreYVR/awesome-answers-react-feb-2018 --> can see all the step-by-step commits

import React, {Component} from "react";
import {
  //When doing named imports, you can use 'as' to rename an import in the context of a file
  BrowserRouter as Router,
  Route,
  Switch //going to change behaviour of some specific routes; makes them behave more like static routes in rails
} from 'react-router-dom';  //the name of the package
import {QuestionShowPage} from "./QuestionShowPage";
import {QuestionIndexPage} from "./QuestionIndexPage";
import {QuestionNewPage} from "./QuestionNewPage";
import {NavBar} from "./NavBar";
import {SignInPage} from './SignInPage';
import jwtDecode from "jwt-decode";
import {AuthRoute} from './AuthRoute';
import {NotFoundPage} from './NotFoundPage'
import {HomePage} from './HomePage'

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      user: null
    }
    this.signInUser = this.signInUser.bind(this)
    this.signOutUser = this.signOutUser.bind(this)
  }

  componentWillMount(){ //so component loaded with the correct state
    this.signInUser();
  }

  signInUser(){
    //go into localStorage and gets user and puts in the state
    // console.log(localStorage.getItem("JWT"))
    const jwt = localStorage.getItem("JWT")

    if (jwt){ //the data encoded into the jwt
      const payload = jwtDecode(jwt);
      this.setState({
        user: payload
      });
    }
  }

  signOutUser(){
    localStorage.removeItem("JWT");
    this.setState({user:null});
  }

  render(){
    const {user} = this.state;
      return(
        // When using react-router, you must make the <Router> component the root component of your application. <Router> component can only have one child.
        //routes to show specific components
        <Router>
          <div className="App">
            <NavBar user={user} onSignOut={this.signOutUser}/>
            <Switch>
              {/* Switch forces there to be only one Route component that matches, not two. The first one that matches is the only one that renders inside of Switch. So order will matter. Use authroute for all your routes depending on what you have given permission to in the backend Rails app */}
              <Route exact path= "/" component={HomePage} />
              <Route exact path="/questions" component={QuestionIndexPage} />
              <AuthRoute isAuthenticated={!!user} path="/questions/new" component={QuestionNewPage} />
              <AuthRoute isAuthenticated={!!user} path="/questions/:id" component={QuestionShowPage} />
              <Route path="/sign_in"
              render={props =>  <SignInPage {...props} onSignIn={this.signInUser} />}
              />
              <Route component={NotFoundPage}/>
          </Switch>
        </div>
      </Router>
    );
  }
}

export {App};
