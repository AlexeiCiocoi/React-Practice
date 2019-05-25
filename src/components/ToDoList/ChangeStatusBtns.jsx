import React from 'react'
import { connect } from 'react-redux';





class ChangeStatusBtns extends React.Component{
    constructor(props){
        super(props)
        this.state={
            statusBtns:[
                
                {
                    title:'Complite',
                    status:'done',
                    className:'todo_complite'
                },
                {
                    title:'Important',
                    status:'important',
                    className:'todo_important'
                },
                {
                    title:'Delete',
                    status:'delete',
                    className:'todo_delete'
                },
            ]
        }
 
    }

   

    render(){
        return(
            <div className='todo_settings'>
                {this.state.statusBtns.map((item,index)=>{
                    // console.log(this.props)
                    return(
                        <div onClick={()=>{this.props.changeStatus(item.status,this.props.itemId)}} className={item.className} key={index}>{item.title}</div>
                    )
                    
                })}
        </div>
        )
    }
}


const mapDispatchToProps = dispatch => {
    return {
        changeStatus: (status,id) =>{
            let data = {status,id}
            dispatch({type:'CHANGE_STATUS',data})
        }
    } 
}


export default connect(null,mapDispatchToProps) (ChangeStatusBtns)