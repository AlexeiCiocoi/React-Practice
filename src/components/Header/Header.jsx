import React from 'react'
import './header.scss'
import { NavLink } from 'react-router-dom'
import list from './NavigationList.jsx'

export default class Header extends React.Component{

    constructor(){
        super()
    }

    render(){
        return(
            <header className='header_wrapper'>
                {list.map((item,index) => {
                   return <NavLink  key={index} className='header_nav-links' to={item.path} >{item.title}</NavLink>
                })}
            </header>
        )
    }
}