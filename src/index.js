import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

// Create a Component------------------------------------------------------
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
      <h1>Answers</h1>
      <p>yellow</p>
      <p>By: Doge Shiba</p>
      <p><strong>Created:</strong> 2018-01-01</p>
    </div>
  )
}

//Rendering Views------------------------------------------------------
ReactDOM.render(<QuestionDetails />,
  document.getElementById('root')//calling React.createElement FUNCTION
);

ReactDOM.render(<AnswerDetails />,
  document.getElementById('answers')
);

registerServiceWorker();
