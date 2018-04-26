import React from 'react'

function SignInForm(props){
  const {
    email,
    password,
    onChange = () => {},
    onSubmit = () => {}
  } = props; //destructuring things from the props
  //controlled form, everything the user is doing, keeps it saved in the state until submitted
  // track all changes that are being done on this form
  const handleChange = name => event =>{ //something to do with closure here
    // console.log(name, event.currentTarget.value); //can get the currentTarget from the value; the data as it is being input
    onChange({[name]: event.currentTarget.value}) //calling the callback coming from the props, send an object
    //using square brackets means you can have dynamic keys; e.g. if you have a space in the key-name
    //'name' comes from the name in the email input
  }

  return(
    <form onSubmit={e => {
                      e.preventDefault(); 
                      onSubmit()}}>
      <div>
        <label htmlFor='email'>Email</label> <br />
        <input type='email' id='email' name='email' value={email} onChange={handleChange('email')}/>
      </div>

      <div>
        <label htmlFor='password'>Password</label> <br />
        <input type='password' id='password' name='password' value={password} onChange={handleChange('password')} />
      </div>

      <div>
        <input type='submit' value='Sign In'/>
      </div>
    </form>
  );
}

export {SignInForm};
