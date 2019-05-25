import React, { Component } from 'react'
import SendMessage from './SendMessage.jsx'
import { connect } from 'react-redux';
import Message from './Message.jsx'

 class MessageList extends React.Component {
    constructor(props){
        super(props)

    }

    render(){
        const selectedMessages = this.props.selectedMessages
        
        return(
            <div className='messageList_wrapper'>
                {selectedMessages && selectedMessages.map((message,index)=>{
                  
                    return(
                        <Message key={index} aboutMessage={message} />
                       
                    )
                })}
               <SendMessage />
            </div>




        ) 
    }
}

const mapStateToProps = state =>{
 return{
    selectedMessages:state.roomReducer.selected
 }
}


export default connect(mapStateToProps)(MessageList)
