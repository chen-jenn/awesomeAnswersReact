import React, {Component} from 'react';
import {QuestionDetails} from './QuestionDetails';
import{AnswerList} from './AnswerList';
import detailedQuestion from '../data/detailedQuestion';

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
      question: detailedQuestion //store your data here
    }

    this.deleteQuestion = this.deleteQuestion.bind(this)
  }

  deleteQuestion(){
    this.setState({
      question: {}
    });
  }

  render(){
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
          <AnswerList
            answers={this.state.question.answers}
          />
        </main>
      )
    }
  }
}

export {QuestionShowPage};
