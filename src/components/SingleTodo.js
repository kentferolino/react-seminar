import React, { Component } from "react";



const SingleTodo = props => {
        return (
            <li> {props.todo} <button onClick={props.delete}>X</button> </li>
        )
}

// class SingleTodo extends Component {
//     constructor() {
//         super();
//     }
//     render() {
//         return (
//             <li> {this.props.todo} <button onClick={this.props.delete}>X</button> </li>
//         )
//     }
// }

export default SingleTodo;