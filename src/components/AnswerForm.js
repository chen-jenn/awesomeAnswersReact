import React from 'react';

function AnswerForm(props){
  const {onSubmit = () => {}} = props;

  const handleSubmit = event => {
    event.preventDefault();
    const {currentTarget} = event;
    const fD = new FormData(currentTarget);

    onSubmit({
      body: fD.get("body")
    })

    currentTarget.reset()
  }

  return (
    <form onSubmit={handleSubmit} className="AnswerForm">
      <textarea cols="40" rows="4" name="body"></textarea><br></br>
      <input type="submit" value="Submit"/>
    </form>
  );
}

export default AnswerForm;
