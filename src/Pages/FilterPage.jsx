import React from 'react'
import FilterApp from '../components/FilterItems/FilterApp.jsx'


export default class FilterPage extends React.Component{

    constructor(){
        super()
    }

    render(){
        return(
            <div className='home-page_wrapper'>
                <FilterApp />
            </div>
        )
    }
}