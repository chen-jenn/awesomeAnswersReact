import React, {Component} from "react";
import {Link} from "react-router-dom"; //Use the component for regular links
import {Field} from './Field';
import { Question } from "../requests/question";


class QuestionIndexPage extends Component {
  constructor(props){
    //constructor gets the props when a componnent is initialized first
    super(props);

    //set up the state; the object is what you can initialize with any data you want
    this.state = {
      page: 1,
      loading: true, //allow for like a loading bar
      questions: [] //store the data in the state instead; and then use this.state.questions.map etc. below
    }

    //Methods that are used as callbacks will no longer be owned by their instance once they're called. Meaning that their 'this' will be either undefined or 'Window'. Use 'bind' on the method to permanently set its 'this' to the instance's 'this'
    this.deleteQuestion = this.deleteQuestion.bind(this);
  }

  componentWillMount(){
    const queryString = this.props.location.search;
    const page = new URLSearchParams(queryString).get("page");

    this.setState({
      page: parseInt(page, 10)
    });
  }

  componentDidMount(){
    Question
      .all({page: this.state.page})
      .then(questions => {
        this.setState({questions: questions, loading: false})
      });
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
    if(this.state.loading){
      return(
        <main className="QuestionIndexPage">
          <h2>Loading Questions...</h2>
        </main>
      );
    }
    return (
      <main className="QuestionIndexPage">
        <h2>Questions</h2>
        <ul>
          {
            this.state.questions.map(
              (question, index) => (
                <li key={question.id}>
                  <Link to={`/questions/${question.id}`}>{question.title}</Link>
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

        <Link to={`/questions?page=${this.state.page + 1}`} >
          Next Page
        </Link>
      </main>
    )
  }
}

export {QuestionIndexPage};
