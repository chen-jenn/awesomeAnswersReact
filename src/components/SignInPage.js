import React, {Component} from 'react';
import {SignInForm} from './SignInForm'
import {Token} from '../requests/token';


class SignInPage extends Component {
  constructor(props){
    super(props);

    this.state = {
      tokenParams: { //to store all the things coming in from the form
        email: '',
        password: ''
      }
    }
    this.updateForm = this.updateForm.bind(this)
    this.signIn = this.signIn.bind(this)
  }

  updateForm(params){
    this.setState({
      tokenParams: {
        ...this.state.tokenParams, //things get meerged into a new object (the state before and then the new state being set)
        ...params
      }
    })
  }

  signIn(){ //getting the data from state
    const tokenParams = this.state.tokenParams;
    const { onSignIn = () => {} } = this.props;

    Token
      .create(tokenParams)
      .then(data => {
        localStorage.setItem('JWT', data.jwt); //local storage needs to be before onSignIn because the state change from sign in is fast enough that it isnt set in local storage yet 
        onSignIn(data);
        this.props.history.push("/"); //send the user back home once they have signed in
      });
  }

  render(){
    const { tokenParams } = this.state;
    return(
      <main className="SignInPage">
        <h1>Sign In Page</h1>
        <SignInForm onSubmit={this.signIn} onChange={this.updateForm} {...tokenParams}/>
      </main>
    );
  }

}

export {SignInPage};
