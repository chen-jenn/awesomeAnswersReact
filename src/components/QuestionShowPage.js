import React from 'react';
import {QuestionDetails} from './QuestionDetails';
import {AnswerDetails} from './AnswerDetails';

function QuestionShowPage(props){
  return(
    <main className="QuestionShowPage">
      <QuestionDetails
        title="What is your favourite colour?"
        body="Red, blue, magenta, cyan"
        user={{full_name: "Jen"}}
        view_count={1000}
        created_at={new Date().toLocaleString()}
      />
      <h2>Answers</h2>
      <AnswerDetails //passing in arguments that are used by the props argument
        body="green things"
        user={{full_name: "doge"}}
        created_at={new Date().toLocaleString()}
      />
    </main>
  )
}

export {QuestionShowPage};
