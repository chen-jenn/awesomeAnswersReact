import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import {QuestionShowPage} from './components/QuestionShowPage'


//Rendering Views------------------------------------------------------
ReactDOM.render(<QuestionShowPage />, //can only render one component so we have everything as descendants instead of having so many of these ReactDOM.render as that can get quite messy
  document.getElementById('root')//calling React.createElement FUNCTION
);

registerServiceWorker();
