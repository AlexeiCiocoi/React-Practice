import React from 'react'
import { connect } from 'react-redux';
import newPostModal from '../../assets/actions/newPostModal.jsx'


class AddNewModal extends React.Component{
    constructor(){
        super()

        this.state={

            title:'',
            content:'',
            error:false

        }
        

        // Binding Methods
        this.modalHandle = this.modalHandle.bind(this)
        this.modalContent = this.modalContent.bind(this)
        this.getNewPost =  this.getNewPost.bind(this)
        this.getNewState =  this.getNewState.bind(this)
        this.regAmountOfLettesr = this.regAmountOfLettesr.bind(this)
    }



    // Methods 


    // transfering data to reducer from form 
    getNewPost = (e) =>{
        let post = this.state
        e.preventDefault()

        if(this.regAmountOfLettesr(post.title.length ,6) && this.regAmountOfLettesr(post.content.length , 10) ){
         
            this.props.sendNewPost(this.state)
            this.props.modalGetHandle()
            console.log('error', this.error.error)
            this.setState({
                
                    title:'',
                    content:'',
                    error:false})
        }else{
            
            this.setState({error:true})
           
        }

        
       
    }
 
 // setting values from form to our state 
    getNewState = (e) =>{
      
        this.setState({

               [e.target.dataset.set]:e.target.value,
        })
    }

    // cheking if fields are nor empty 

    regAmountOfLettesr = (cur,min) => {
       
        if(cur<min){
            return false
        }else {
            return true
        }

    }
    

    // get modal window content to tranfer to reducer 
    modalContent = () =>{
         
            return(
                <div className='new_post-modal'>
                    <form onSubmit={this.getNewPost}>
                    
                        <p>Min 6 Characters</p>
                       <input onChange={this.getNewState} type="text" placeholder='Enter title ' data-set='title'   />
                       {this.state.error ? <p>Min Length is 10 regAmountOfLettesr</p>:null}
                       <p>Min 10 Characters</p>
                       <textarea onChange={this.getNewState} data-set='content'   placeholder='Enter content'></textarea>
                       <button  className='my_btn'>Create</button>
                    </form>
                </div>
            )
        }

    // transfering modal window new content and handle to open Modal
    modalHandle = () =>{
      
       this.props.newPostModal(this.modalContent()) 
       this.props.modalGetHandle()
   
    }


    render(){
        {this.state.error ? console.log('eroor true '):null}
        return(
            <div>
                <button onClick={this.modalHandle}>Add Post</button>
            </div>

        )
    }
}


// reducer Methods

// passing data from reducer to Component props
const mapStateToProps = (state) =>{
    return{
        modalHandle:state.modalReducer.modalHandle
    }
}


// adding Dispatch to props
const mapDispatchToPros = dispatch =>{
    return{
        newPostModal:(data) =>{
            dispatch(newPostModal.modalGetData(data))
        },
        modalGetHandle:() =>{
            dispatch(newPostModal.modalGetHandle())
        },
        sendNewPost:(data) =>{
            dispatch({type:'ADD_POST',data})
        }

    }
}


export default connect (mapStateToProps,mapDispatchToPros)(AddNewModal) 