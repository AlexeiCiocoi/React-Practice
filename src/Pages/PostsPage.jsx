import React from 'react'
import Posts from '../components/Posts/Posts.jsx'


export default class PostPage extends React.Component{

    constructor(){
        super()
    }

    render(){
        return(
            <div className='home-page_wrapper'>
                <Posts />
            </div>
        )
    }
}