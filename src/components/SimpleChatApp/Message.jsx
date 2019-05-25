import React, { Component } from 'react'


export default class Message extends React.Component {
    constructor(props){
        super(props)

    }

    render(){
        let questClass = this.props.aboutMessage.quest ? 'message_holder quest':'message_holder '
        return(
            <div className={questClass}>
                
                <div className='message_userName'>{this.props.aboutMessage.userName}</div>
                <div className='message_container'>
                    {this.props.aboutMessage.message}
                </div>
            </div>

        ) 
    }
}







