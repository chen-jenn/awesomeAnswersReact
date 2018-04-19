import React from 'react';
import {Field} from './Field';

//Answer detail is like the layout for how to display each answer 

function AnswerDetails(props){ //props is an object containing your data
  return ( //giving a className to a div is technically optional but why not
    <div className="AnswerDetails">
      <p>{props.body}</p>
      <p>By: {props.author_full_name}</p>
      <Field name="Created At" value={new Date(props.created_at).toLocaleString()} />
      {/* <p><strong>Created:</strong> {props.created_at}</p>  --> same as above line, but helps with refactoring*/}
    </div>
  );
}

export {AnswerDetails};
