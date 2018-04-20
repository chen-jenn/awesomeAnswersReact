import React from 'react';
import {AnswerDetails} from './AnswerDetails';

function AnswerList(props){
  const {answers = []} = props; //give a default if there is no array; prevents crashing
  return (
      <ul className="AnswerList">
        {
          answers.map((answer,index) => (
            <li key={answer.id}>
              {/* <AnswerDetails
                body={answer.body}
                author_full_name={answer.author_full_name}
                created_at={answer.created_at}
              /> */}
              {/* this takes all the properties of AnswerDetails and creates keys with values of the same name; is a shortcut */}
              <AnswerDetails {...answer}/>
            </li>
          ))
        }
      </ul>
  );
}

export {AnswerList};
