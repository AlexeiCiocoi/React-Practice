import React, { Component } from 'react'
import { connect } from 'react-redux';


class SendMessage extends React.Component {
    constructor(props){
        super(props)
        this.state={
            userName:'Alexei',
            message:'',
            quest:false
           
        }
        this.getAllMessageInfo =  this.getAllMessageInfo.bind(this)
        this.getMessageValue = this.getMessageValue.bind(this)


    }

    getAllMessageInfo(e){
        e.preventDefault()
        this.props.newMessage(this.state)
        this.setState({
            message:''
        })
    }


    getMessageValue(e){
        this.setState({
            message:e.target.value,
            id:this.props.currentRoom
        })
    }


    render(){
        console.log(this.props.currentRoom)
        return( 
            this.props.currentRoom ? (
                <form onSubmit={this.getAllMessageInfo}  className='chat-form'>
                    <input onChange={this.getMessageValue} value={this.state.message}  type="text" className='new-room_name' placeholder='Type youre Message '/>
                    <button className='my_btn'>Send</button>
                </form>
            ): null
            




        ) 
    }
}

const mapDispatchToProps = (dispatch) =>{
    return{
        newMessage:(data)=>{
            dispatch({type:'ADD_NEW-MESSAGE',data})
        }
    } 
}

const mapStateToProps = (state) =>{
    return{
        currentRoom:state.roomReducer.roomId
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(SendMessage)
