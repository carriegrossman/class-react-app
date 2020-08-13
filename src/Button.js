import React from 'react';

// const Button = (props) =>{
//     return(<button>{props.text}</button>)
// }


//this is a functional component
const Button = ({text,whenClicked,clickedTimes}) =>{
    //console.log(color)

    // let clickedTimes = 0;

    // const whenClicked = () =>{
    //     // console.log('You clicked me')
    //     clickedTimes +=1;
    //     console.log(clickedTimes)
    // }

    return(<button onClick={whenClicked} >{text} : {clickedTimes}</button>)
}

// class Button extends React.Component {
//     render(){
//         return (
//             <div>
//                 <button>Click!</button>
//             </div>
//         )
//     }
// }
export default Button;