import React from 'react'
import AutoComplite from '../components/AutoComplite/AutoComplite.jsx'
export default class Home extends React.Component{

    constructor(){
        super()
    }

    render(){
        return(
            <div className='home-page_wrapper'>
                <AutoComplite />
            </div>
        )
    }
}