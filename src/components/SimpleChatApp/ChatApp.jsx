import React, { Component } from 'react'
import RoomList from './RoomList.jsx'
import NewRoom from './NewRoom'
import MessageList from './MessageList'
import Message from './Message.jsx'
import './chat-styles.scss'

export default class ChatApp extends React.Component {
    constructor(props){
        super(props)

    }

    render(){
        return(
            <div className='chat_wrapper'>
              
                <RoomList />
                <MessageList />
               
            </div>




        ) 
    }
}

