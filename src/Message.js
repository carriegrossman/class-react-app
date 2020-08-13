import React from 'react';

class Message extends React.Component {
    // constructor(props){
    //     super(props) //this.props = props
    //     // console.log(props.message)
    //     // console.log(props.message2)
    // }

    render(){
        return (
            <div>
                <div>{this.props.message}</div>
                <div>{this.props.message2}</div>
            </div>
        )
    }
}


            // <div onClick={()=>{
            //     console.log("you clicked a message")
            // }}>
export default Message;