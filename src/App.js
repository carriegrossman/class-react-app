import React from 'react';
import './App.css';

import Message from './Message.js';
import Button from './Button.js';
import Toggle from './Toggle.js';

class App extends React.Component {
  
  constructor(props){
    super(props);
    this.state ={
      clickedTimes : 0,
  }
}


  //since it is in a class it can only be accessed by --> line 24
  whenClicked(){
    this.setState({...this.state, clickedTimes:this.state.clickedTimes+1})
    //this.clickedTimes += 1;
    // console.log('Click on Child Button ' +this.state.clickedTimes)
    console.log('You clicked me ' +this.state.clickedTimes +' time(s)')
  }

  render(){
  return (
    <div className="App">
      <header className="App-header">
        <p>Hello!</p>
        <Message 
          //message={this.state.message}
          //message={'I am sending a message'} 
          //message2={'I am sending a second message'}
        />

        {/* <Message message={'Another one..'} /> */}
        <Button 
        text="Click me" whenClicked={this.whenClicked.bind(this)}
        clickedTimes = {this.state.clickedTimes}
        />
        <Toggle />

      </header>
    </div>
  )};
}



export default App;