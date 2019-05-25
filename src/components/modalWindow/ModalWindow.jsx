import React from 'react'
import './modal.scss'
import { connect } from 'react-redux';
import newPostModal from '../../assets/actions/newPostModal.jsx'

class modalWindow extends React.Component{
    constructor(){
        super()
    }

    render(){
       
        let content = this.props.modalHandle ? (      
                <div className='modal-wrapper'>
                    <div  className='modal-content'>
                        <button onClick={this.props.closeModal} className='close_btn' >X</button>
                        {this.props.modalContent}
                    </div>
                </div>
 
        ):null
        return(
           
            <div>
            
            {content}</div>
          )
    }
}

const mapStateToProps = (state) =>{
    return{
        modalContent:state.modalReducer.modalContent,
        modalHandle:state.modalReducer.modalHandle
    }
}

const mapDispatchToProps = dispatch => {

    return{
        closeModal: () =>{
            dispatch(newPostModal.modalGetHandle())
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(modalWindow)