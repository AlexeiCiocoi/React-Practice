import React from 'react'


export default class FilterButtons extends React.Component{
    constructor(props){
        super(props)
       this.state={
           type:this.props.category
       }
    }
   
    render(){
        
        return(
           
            <div onClick={()=> this.props.callback(this.state.type)} className='filter_but'>{this.props.category}</div>

        )

    }
}