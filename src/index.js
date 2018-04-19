import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

// Creating Components------------------------------------------------------
function QuestionDetails(props){
  return (
    <div className="QuestionDetails">
      <h1>{props.title}</h1>
      <p>{props.body}</p>
      <p>By: {props.user.full_name}</p>
       <p><strong>View Count: </strong>{props.view_count}</p>
      <p><strong>Created at: </strong>{props.created_at}</p>
    </div>
  );
}

function AnswerDetails(props){ //props is an object containing your data
  return ( //giving a className to a div is technically optional but why not
    <div className="AnswerDetails">
      <p>{props.body}</p>
      <p>By: {props.user.full_name}</p>
      <p><strong>Created:</strong> {props.created_at}</p>
    </div>
  );
}

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

//Rendering Views------------------------------------------------------
ReactDOM.render(<QuestionShowPage />, //can only render one component so we have everything as descendants instead of having so many of these ReactDOM.render as that can get quite messy
  document.getElementById('root')//calling React.createElement FUNCTION
);

registerServiceWorker();
