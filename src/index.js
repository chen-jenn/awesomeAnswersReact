import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

// Creating Components------------------------------------------------------
function QuestionDetails(props){//function needs to have a capital letter otherwise React thinks it is just html
  return (
    <div className="QuestionDetails">
      <h1>What is your favourite colour?</h1>
      <p>Red, green, blue, magenta, yellow</p>
      <p>By Bridge Troll</p>
      <p><strong>View Count: </strong>111</p>
      <p><strong>Created</strong> 2018-01-01</p>
    </div>
  )
}

function AnswerDetails(props){
  return ( //this is technically optional but can just className named after your function name
    <div className="AnswerDetails">
      <p>yellow</p>
      <p>By: Doge Shiba</p>
      <p><strong>Created:</strong> 2018-01-01</p>
    </div>
  )
}

function QuestionShowPage(props){
  return(
    <main className="QuestionShowPage">
      <QuestionDetails />
      <h2>Answers</h2>
      <AnswerDetails />
    </main>
  )
}

//Rendering Views------------------------------------------------------
ReactDOM.render(<QuestionShowPage />,
  document.getElementById('root')//calling React.createElement FUNCTION
);

// ReactDOM.render(<AnswerDetails />, //can only render one component so we have everything as descendants instead of having so many of these
//   document.getElementById('answers')
// );

registerServiceWorker();
