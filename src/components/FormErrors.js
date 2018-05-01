import React from 'react';
//can use this component in any other page as long as you format the image 

function FormErrors(props){
  const { forField, errors = [] } = props; //props are coming from  the state of our QuestionNewPage component
  let filteredErrors;
  if(forField){
    filteredErrors = errors.filter(
      e => e.field.toLowerCase() === forField.toLowerCase() //field for the error corresponds with the forField prop
    );
  } else {
    filteredErrors = errors;
  }

  if (filteredErrors.length > 0){
    return(
      <ul className="FormErrors">
        {filteredErrors.map(
          (err, i) => <li key={i}>{err.message}</li>
        )}
      </ul>
    );
  } else {
    return null; //if you return null from a component, React will just not render anything
  }

};

export {FormErrors};
