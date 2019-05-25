import React from 'react'
import ChatApp from '../components/SimpleChatApp/ChatApp.jsx'


export default class ChatPage extends React.Component{

    constructor(){
        super()
    }

    render(){
        return(
            <div className='home-page_wrapper'>
                <ChatApp />
            </div>
        )
    }
}