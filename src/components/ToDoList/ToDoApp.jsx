import React from 'react'
import { connect } from 'react-redux';
import './to-do.scss'
import CreateToDo from './CreateToDo.jsx'
import ToDoFilter from './ToDoFilter.jsx'
import ToDoItem from './ToDoItem.jsx'
class ToDoApp extends React.Component{

    constructor(){
        super()

    }
    render(){
        return(
            <div>
                {/* create todo section  */}
                <CreateToDo />

                {/* // filter section */}
                <ToDoFilter />

                {/* show all Todos */}
                <ToDoItem />
            </div>
        )
    }

}

export default connect(null)(ToDoApp)

