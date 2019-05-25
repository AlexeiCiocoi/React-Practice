import React from 'react'

import './auto-cmplite.scss'
import autoCompliteData from '../../assets/Data/autoCompliteData'



export default class AutoComplite extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            value:false,
            innerText:'',
            suggestions:[],
            active:''
        }
        // Bind Methods
        this.inputRef = React.createRef()
        this.getValues = this.getValues.bind(this)
        this.renderResult = this.renderResult.bind(this)
        this.getItemValue = this.getItemValue.bind(this)
        this.handleArrows = this.handleArrows.bind(this)

    }

        getValues(e){
            let value = e.target.value
            if(!value==''){
                let regex = new RegExp(`^${value}`,'i')
                let suggestions = autoCompliteData.sort().filter(v=> regex.test(v))
                this.setState({filteredData:suggestions,innerText:e.target.value})
                 
            }else this.setState({innerText:'',filteredData:[]})
             
        }

      

        renderResult(){
        
            let newArr = this.state.filteredData.map((item,index)=>{
                return <li className={this.state.active} onClick={(e)=>{this.getItemValue(e)}} key={index}>{item}</li>
            })
            return newArr
        }
    
    
        getItemValue(e){
            
            let value = e.target.textContent
            this.setState({innerText:value,filteredData:[]})
            
        }

        handleArrows(){
           // TODO:
        }


    render(){
       const {innerText} = this.state
        return(

            <div className='auto-complite_wrapper'>
                <h4>Simple Auto Complite</h4>
               
                <input placeholder='Type a Name' onKeyPress={this.handleArrows} value={innerText} ref={this.inputRef} onChange={(e)=>{this.getValues(e)}} type="text"/>
                <ul >
                    {this.state.filteredData ? this.renderResult():null }
                </ul>
               
                
            </div>
        )
    }
}