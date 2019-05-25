import React, { Component } from 'react'
import Room from './Room.jsx'
import NewRoom from './NewRoom.jsx'
import { connect }  from 'react-redux'

class RoomList extends Component {
    constructor(props){
        super(props)


        
    }


    


    render(){
   
        const rooms = this.props.rooms
        
        return(
            <div className='room_list-wrapper'>
                <h5>Choose Room</h5>
                 {rooms && rooms.map(room=>{
                   
                     return(
                         <Room  key={room.id} roomInfo={room} />
                     )
                 })}
                <NewRoom />   
            </div>
        )
    }
}



const mapStateToProps = (state) =>{
    return {
        rooms:state.roomReducer.rooms
    } 
    
}




export default connect(mapStateToProps)(RoomList) 