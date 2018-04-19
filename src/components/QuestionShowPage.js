import React from 'react';
import {QuestionDetails} from './QuestionDetails';
import {AnswerDetails} from './AnswerDetails';
import{AnswerList} from './AnswerList';
import detailedQuestion from '../data/detailedQuestion';

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
      <AnswerList
        answers={detailedQuestion.answers}
      />
    </main>
  )
}

export {QuestionShowPage};
