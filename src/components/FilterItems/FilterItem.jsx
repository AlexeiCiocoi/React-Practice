import React from 'react'


export default class FilterItem extends React.Component{
 constructor(props){
     super(props)
 }
    render(){
        return(
            <div className='filter_items'>
                
                <img src={this.props.img} alt=""/>
                <div>
                    <div>Product: {this.props.name}</div>
                    <div>Price: {this.props.price} </div>
                    <div>Amount: {this.props.amount}</div>
                </div>
            </div>
        )
    }

}