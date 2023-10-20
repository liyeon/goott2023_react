import React, { Component } from 'react';

class Message extends Component {
    constructor(){
        super()
        this.state={
            message:'welcome myi visitor'
        }
    }
    changeMessage(){
        this.setState({
            message:"Thanks very much for you hepling me"
        })
    }
    render() {
        return (
            <div>
                <h1>{this.state.message}</h1>
                <button onClick={()=>this.changeMessage()}>Change Message Button</button>
            </div>
        );
    }
}

export default Message;