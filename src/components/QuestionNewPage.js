import React, {Component} from 'react'
import {QuestionForm} from './QuestionForm';
import {Question} from "../requests/question";

class QuestionNewPage extends Component {
  constructor(props){
    super(props);
    this.state = {
      validationErrors: []
    };

    this.createQuestion = this.createQuestion.bind(this);
  }

  createQuestion(params){
    Question
      .create(params)
      .then(data => {
        if (data.errors){
          // can store errors in the state and can then be displayed wherever you want
          this.setState({
            validationErrors: data
              .errors
              .filter(
                e => e.type = "ActiveRecord::RecordInvalid"
              )
          })
        } else {
          const questionId = data.id;
          this.props.history.push(`/questions/${questionId}`);
        }
      })
  }

  render(){
    return(
      <main className="QuestionNewPage">
        <h2>Add New Question</h2>
        <QuestionForm
          errors={this.state.validationErrors}
          onSubmit={this.createQuestion} />
      </main>
    );
  }
}

export {QuestionNewPage};
