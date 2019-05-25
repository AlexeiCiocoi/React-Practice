import React from 'react'
import ToDoApp from '../components/ToDoList/ToDoApp.jsx'



export default class ToDoAppPage extends React.Component{
    constructor(){
        super()
    }
    
    render(){
        console.log('app page')
        return(

            <div>   
                <ToDoApp />
                

            </div>
        )
    }
}