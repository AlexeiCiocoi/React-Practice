import React from 'react'
import {connect} from 'react-redux'
import ChangeStatusBtns from './ChangeStatusBtns.jsx'



 class ToDoMain extends React.Component{
    constructor(props){
        super(props)

        this.showItemsByStatus = this.showItemsByStatus.bind(this)
        this.toDoItemRender = this.toDoItemRender.bind(this)
    }

    showItemsByStatus = (status,items) =>{
        if(items){
            let itemArr = items.filter(item => item.status == status)

        return itemArr
        }
        return null

    }
    toDoItemRender = () => {
        
        if( this.props.showItems){

            return this.showItemsByStatus(this.props.showStatus,this.props.showItems).map((item,index)=>{
                    return (
                        <div key={index} className='todo_container-item'>
                             <h5></h5>
                            <div className='flex'>
                                <p>{item.content} </p> 
                            </div>
                            <ChangeStatusBtns itemId={item.id} />
                        
                        
                        </div>
                )
            
                })
            

        } 

        return null


    }
    

    render(){ 
        return(
           <div className='todo_items-conatiner'>

               { this.toDoItemRender()
                }
               
           </div>
            
        )
    }
}


const mapStateToProps = state =>{
    return{
        showItems:state.todoReducer.items,
        showStatus:state.todoReducer.showStatus
    }
}



export default connect(mapStateToProps)(ToDoMain)