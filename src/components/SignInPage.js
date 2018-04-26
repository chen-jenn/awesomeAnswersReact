import React, {Component} from 'react';
import {SignInForm} from './SignInForm'

class SignInPage extends Component {
  constructor(props){
    super(props);

    this.state = {
      sessionParams: { //to store all the things coming in from the form
        email: '',
        password: ''
      }
    }
    this.updateForm = this.updateForm.bind(this)
  }

  updateForm(params){
    this.setState({
      sessionParams: {
        ...this.state.sessionParams, //things get meerged into a new object (the state before and then the new state being set)
        ...params
      }
    })
  }

  render(){
    const { sessionParams } = this.state;
    return(
      <main className="SignInPage">
        <h1>Sign In Page</h1>
        <SignInForm onSubmit={() => console.log("Test!")} onChange={this.updateForm} {...sessionParams}/>
      </main>
    );
  }

}

export {SignInPage};
