//https://github.com/CodeCoreYVR/awesome-answers-react-feb-2018 --> can see all the step-by-step commits

import React from "react";
import {
  //When doing named imports, you can use 'as' to rename an import in the context of a file
  BrowserRouter as Router,
  Route
} from 'react-router-dom';  //the name of the package
import {QuestionShowPage} from "./QuestionShowPage";
import {QuestionIndexPage} from "./QuestionIndexPage";
import {NavBar} from "./NavBar";

function App(){
  return(
    // When using react-router, you must make the <Router> component the root component of your application. <Router> component can only have one child.
    //routes to show specific components
    <Router>
    <div className="App">
      <NavBar /> 
      <Route exact path="/questions" component={QuestionIndexPage} />
      <Route path="/questions/id" component={QuestionShowPage} />
    </div>
    </Router>
  );
}

export {App};
