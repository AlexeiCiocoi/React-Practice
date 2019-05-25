import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux';

class NewRoom extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            id:'',
            roomName:'',
            messages:[],
            error:false

        }
        // binding methods
        this.createNewRoomHandler =  this.createNewRoomHandler.bind(this)
        this.getingRoomName = this.getingRoomName.bind(this)
        this.checkRoomDuplicate = this.checkRoomDuplicate.bind(this)
    }

    // methods
    createNewRoomHandler(e){
        e.preventDefault()
        if(!this.checkRoomDuplicate(this.state.id)){

            if(this.state.roomName.length){
                this.props.newRoom(this.state)
                this.setState({
                    roomName:'',
                    error:false
                })
            }
            
        }else{
            this.setState({
                error:true
            })
            return 
        }
        
        
     
    }

    checkRoomDuplicate(val){
       
        let newRoonName = this.props.roomIds.filter((id)=>id.toUpperCase() === val.toUpperCase())
        let trigger =  newRoonName.length ? true: false
        
        return trigger
    }


    getingRoomName(e){
         
       this.setState({
           id:e.target.value,
           roomName:e.target.value,
         

       })
       
      
    }

    render(){
      
        return(
            <div className='create-room'>
                {this.state.error ? <div className='create-room_error'>Room alrady Exists</div>:null} 
                <form className='chat-form' onSubmit={this.createNewRoomHandler}>

                    <input onChange={this.getingRoomName} value={this.state.roomName} className='new-room_name' type="text" placeholder=' New room'/>
                    <button className='my_btn' >Create</button>
                </form>
            </div>
        ) 
    }
}

//redux methods

const mapDispatchToProps = (dispatch) => {
    return{
        newRoom:(data) =>{
           
            dispatch({type:'ADD_ROOM',data})
        }
    }
}



const mapStateToProps = (state)=>{
    
    return{
        roomIds:state.roomReducer.rooms && state.roomReducer.rooms.map((item)=>{return item.id})
    }
        
}
export default connect(mapStateToProps,mapDispatchToProps)(NewRoom)