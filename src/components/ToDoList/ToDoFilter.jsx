import React from 'react'
import { connect } from 'react-redux';


class ToDoFilter extends React.Component{
    constructor(){
        super()

        this.state={
            filters:[
                {
                    title:'In Work',
                    filterState:'inWork'
                },
                {
                    title:'Complite',
                    filterState:'done'
                },
                {
                    title:'Important',
                    filterState:'important'
                },

            ]
        }
    }




    render(){
       
        return(
            <div className='todo_filter-bar'>
                    {this.state.filters.map((item,index)=>{
                        
                        return <div onClick={()=>{this.props.filterState(item.filterState)}} key={index} className='my_btn'>{item.title}</div>
                        
                    })}
                  
                 </div>
        )
    }
}




const mapDispatchToProps = dispatch =>{
    return {
        filterState:(status) =>{
            
            dispatch({type:'FILTER_BY_STATUS',status})
        }
    }
}

export default connect(null,mapDispatchToProps)(ToDoFilter)