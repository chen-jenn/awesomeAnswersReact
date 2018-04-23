//https://github.com/CodeCoreYVR/awesome-answers-react-feb-2018 --> can see all the step-by-step commits

import React from "react";
import {QuestionShowPage} from "./QuestionShowPage";
import {QuestionIndexPage} from "./QuestionIndexPage";
import CurrentDateTime from "./CurrentDateTime";

function App(){
  return(
    <div className="App">
      <CurrentDateTime />
      <QuestionIndexPage />
      <QuestionShowPage />
    </div>
  );
}

export {App};
