import React, {Component} from 'react'

//anything in a state will try to re-render

class CurrentDateTime extends Component{
  constructor(props){
    super(props);
    this.state = {
      currentDateTime: new Date()
    }
  }

  componentDidMount(){
    this.intervalId = setInterval(() => { //component will now setState every second
      this.setState({currentDateTime: new Date()});
    }, 1000);
  }

  componentWillUnmount(){ //only runs when the component is about to be removed from the page
    //if component is removed, the clearInterval is also destroyed so it doesn't eat up all the RAM
    clearInterval(this.intervalId);
  }

  render(){
    return(
      //all html attributes prefixed with aria is related to accessiblity (e.g. screen readers)
      <span className="CurrentDateTime">
        <span>Date and Time: </span>{this.state.currentDateTime.toLocaleString()}
      </span>
    );
  }
}

export default CurrentDateTime;
