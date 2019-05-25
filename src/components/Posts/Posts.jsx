import React, { Component } from 'react'
import './posts.scss'
import { connect } from 'react-redux'
import {Link} from 'react-router-dom'
import AddNewPost from './AddNewPost.jsx'

class Posts extends Component {

    constructor(props){
        super(props)
       
    }

  

    render(){
        
        
        const postList = this.props.posts.length ? (
           this.props.posts.map(post=>{
                return(
                    <div key={post.id} className='card'>   
                        <Link to={'/' + post.id}><h5 className='card_title'>{post.title}</h5></Link>
                       
                        <div className='card_content'>{post.body}</div>   

                    </div>
                )
            })
        ):(
            <div>There are NO Posts</div>
        )
        return(
            <div>
                <AddNewPost />
                
                <div className='post_container'>
                    {/* {postList} */}
                    {this.props.posts.map((post,index)=>{
                        return(
                            <div key={index} className='card'>   
                                <Link to={'/' + post.id}><h5 className='card_title'>{post.title}</h5></Link>
                       
                        <div className='card_content'>{post.body}</div>   

                    </div>
                        )
                    })}
                    
                </div>
            </div>
            


        );
    }
}
const mapStateToProps = (state)=>{
    return {
         posts:state.postReducer.posts
    }
}

export default connect(mapStateToProps)(Posts)




