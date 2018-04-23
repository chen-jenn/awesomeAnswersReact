import React, {Component} from 'react';
import {QuestionDetails} from './QuestionDetails';
import{AnswerList} from './AnswerList';
import AnswerForm from './AnswerForm';
import {Question} from "../requests/question";

// function QuestionShowPage(props){
//   return(
//     <main className="QuestionShowPage">
//       <QuestionDetails
//         title="What is your favourite colour?"
//         body="Red, blue, magenta, cyan"
//         user={{full_name: "Jen"}}
//         view_count={1000}
//         created_at={new Date().toLocaleString()}
//       />
//       <h2>Answers</h2>
//       <AnswerList
//         answers={detailedQuestion.answers}
//       />
//     </main>
//   )
// }


//Refactoring the above as a class
class QuestionShowPage extends Component {
  constructor(props){
    super(props); //must always say super(props) otherwise errors
    this.state = {
      loading: true,
      question: {} //store your data here
    }

    this.deleteQuestion = this.deleteQuestion.bind(this);
    this.deleteAnswer = this.deleteAnswer.bind(this);
    this.createAnswer = this.createAnswer.bind(this);
  }

  componentDidMount(){
    Question
      .one(229)
      .then(question => {
        this.setState({question: question, loading: false})
      })
  }

  deleteQuestion(){
    this.setState({
      question: {}
    });
  }
//avoid nesting states; the deeper a state is, the harder it is for React to figure out if it needs to re-render
//When creating react compomnents, try to keep your state flat as much as possible. Deeply nested state is hard to work with and is more difficult for React to figure out if it needs to re-render you components
  createAnswer(answer){
    const {question} = this.state;
    const {answers, ...restQuestion} = question;

    this.setState({
      question:{
        ...restQuestion,
        answers: [{...answer, id: Math.random()*10000, created_at: new Date()}].concat(answers)
      }
    })
  }

  deleteAnswer(answerId){
    const {question} = this.state;
    //this will get all the other properties that are not the 'answers'
    const {answers = [], ...restQuestion} = question;

    this.setState({
      question: {
        ...restQuestion,
        answers: answers.filter(a => a.id !== answerId)
      }
    })
  }

  render(){
    if(this.state.loading){
      return(
        <main className="QuestionShowPage">
          <h2>Loading Question...</h2>
        </main>
      );
    }
    if (!this.state.question.id){
      return (
        <main className="QuestionShowPage">
          <h2>Question does not exist</h2>
        </main>
      );
    } else {
      return(
        <main className="QuestionShowPage">
          <QuestionDetails
            {...this.state.question}
          />
          <button onClick={this.deleteQuestion}>Delete</button>

          <h2>Answers</h2>
          <AnswerForm
            onSubmit={this.createAnswer}
          />
          <AnswerList
            onAnswerDeleteClick={this.deleteAnswer}
            answers={this.state.question.answers}
          />
        </main>
      )
    }
  }
}

export {QuestionShowPage};
