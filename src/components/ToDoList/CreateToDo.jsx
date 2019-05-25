import React from 'react'
import { connect } from 'react-redux';



class CreateToDo extends React.Component{
    constructor(){
        super()
        this.state = {
           
            status:'inWork',
            content:'',
            error:false,
             
            
        }
        this.createToDo = this.createToDo.bind(this)
        this.contentValue = this.contentValue.bind(this)
    }


    createToDo = e =>{
        e.preventDefault()
        if(this.state.content.length>3){
            this.props.createToDo(this.state)
            this.setState({content:'',error:false})

        }else{
            this.setState({error:true})
            return
        }
       

    }
    contentValue = e => {
        this.setState({content:e.target.value})
    }

    render(){
       
        return(
            <div  className='todo_container'>
                <h4>Create Youre To Do List</h4>
                <form className='todo_app-header' onSubmit={this.createToDo}>
                    {this.state.error ? <div className='input_error'> Please Fill Min imum 5 Characters</div>: null}
                    <input type="text" value={this.state.content} placeholder='New ToDo' onChange={this.contentValue}/>
                    <button className='my_btn'>Create</button>
                </form>
            </div>
        )
    }

}

const mapDispatchToProps = dispatch =>{
    return{
        createToDo: (data) => {
            dispatch({type:'CREATE_TODO',data})
        }
    }
}


export default connect(null,mapDispatchToProps)(CreateToDo)







