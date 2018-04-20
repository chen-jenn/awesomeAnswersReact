import React, {Component} from "react";
import {Field} from './Field';
import allQuestions from "../data/allQuestions"; //not using braces because it was using export default


class QuestionIndexPage extends Component {
  constructor(props){
    //constructor gets the props when a componnent is initialized first
    super(props);

    //set up the state; the object is what you can initialize with any data you want
    this.state = {
      questions: allQuestions //store the data in the state instead; and then use this.state.questions.map etc. below
    }

    //Methods that are used as callbacks will no longer be owned by their instance once they're called. Meaning that their 'this' will be either undefined or 'Window'. Use 'bind' on the method to permanently set its 'this' to the instance's 'this'
    // this.deleteQuestion = this.deleteQuestion.bind(this);
  }

  //passing the arrow function that deleteQuestion returns
  //arrow functions keep the 'this' of its surrounding block, so you don't even need to bind it; it's like it is pre-bound
  deleteQuestion(questionId){ //a prototype method; a method not done on the object, but on the object's prototype
    return () => {
      const{questions} = this.state;

      this.setState({ //use this whenever you want to change a state. pass an object; that object will be merged to the current state
        // questions: [] //this would replace your entire state with an empty array
        questions: questions.filter(q => q.id !== questionId)
      });
    }
  }

  render(){
    return (
      <main className="QuestionIndexPage">
        <h1>Questions</h1>
        <ul>
          {
            this.state.questions.map(
              (question, index) => (
                <li key={question.id}>
                  <a href="">{question.title}</a>
                  <div style={{
                    display:"flex",
                    alignItems: "center",
                    justifyContent: "space-between"
                  }}>
                    <Field name="Author" value={question.author.full_name} />
                    <button onClick={this.deleteQuestion(question.id)}>Delete</button>
                  </div>

                </li>
              )
            )
          }
        </ul>
      </main>
    )
  }
}

export {QuestionIndexPage};
