//https://github.com/CodeCoreYVR/awesome-answers-react-feb-2018 --> can see all the step-by-step commits

import React from "react";
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
import {SignInPage} from './SignInPage'

function App(){
  return(
    // When using react-router, you must make the <Router> component the root component of your application. <Router> component can only have one child.
    //routes to show specific components
    <Router>
    <div className="App">
      <NavBar />
      <Switch>
        {/* Switch forces there to be only one Route component that matches, not two. The first one that matches is the only one that renders inside of Switch. So order will matter */}
        <Route exact path="/questions" component={QuestionIndexPage} />
        <Route path="/questions/new" component={QuestionNewPage} />
        <Route path="/questions/:id" component={QuestionShowPage} />
        <Route path="/sign_in" component={SignInPage} />
      </Switch>
    </div>
    </Router>
  );
}

export {App};
