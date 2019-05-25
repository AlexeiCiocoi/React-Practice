import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux';

 class Room extends React.Component {
    constructor(props){
        super(props)
        

        this.addEventListener = this.addEventListener.bind(this)
    }
    addEventListener(id){
       
        this.props.getMessagesById(id)
    
    }

   

    render(){
        return(
            <div onClick={()=>{this.addEventListener(this.props.roomInfo.id)}}  className='room'>#
               {this.props.roomInfo.roomName}
            </div>

        ) 
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getMessagesById: (id) => dispatch({type:'GET__MESSAGES',id})  
    }
}

export default connect(null,mapDispatchToProps)(Room)

