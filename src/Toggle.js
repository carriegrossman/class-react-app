import React from 'react';

class Toggle extends React.Component {
    constructor(props){
        super(props);
        this.state ={
          message:'Message',
          show:false
      }
      //this.state is an object and we choose its property. 
      //The property is shot: false meaning there will be no text 
      //showing initially (before pressing the toggle button)
    }
        render(){
            return (
                <div>
              {
                  this.state.show? <div><p>Surprise</p></div> : null
              }
              <button onClick={()=>{this.setState({show:!this.state.show})}}>{ this.state.show? 'Hide' : 'Show'} {this.state.message}</button>
                </div>
            )
        }
    }
    
    //this.setState() is the only way to update the initial state. 
    //It causes React to re-render the application and update the DOM.

    // we don’t need to use .bind method to combine Button and Toggle function together. 
    //We have created an anonymous function ()=>

export default Toggle;