import React from 'react'
import './filter-items.scss'
import FilterButtons from './FilterButtons.jsx'
import FilterData from '../../assets/Data/FilterData.jsx'
import FilterItem from './FilterItem.jsx'

export default class FilterApp extends React.Component {
 
    constructor(props){
        super(props)
        
        this.state={
            filteredItems:FilterData,
            filterType:'All',
            filterCategory:[
                {
                    id:1,
                    name:'All',
                },
                {
                    id:2,
                    name:'Frut',
                }, {
                    id:3,
                    name:'Vegis',
                }, {
                    id:4,
                    name:'Accesory',
                }


            ]
        }
       this.callBackFunc = this.callBackFunc.bind(this)
       
        
    }
    
   
    callBackFunc(type){
        this.setState({
           
            filteredItems: this.filterItems(FilterData,type)
        },()=>{
           
        })
    }

    filterItems(arr,type){
        if(type!=='All'){
            return  arr.filter(item => item.category == type) 
        }else {
            return arr
        }
       
        
    }

    render(){
        //    console.log(this.state)
        // console.log(filteredItems)
        return(
            <div className='filter_main-container'>
                
                <div className="filter_btn-holder">
                {this.state.filterCategory.map(item=>{
                    return(
                         <FilterButtons category={item.name} key={item.id} callback={this.callBackFunc} />
                    )
  
                    })}
                </div>
                <div className='filter_items-holder'>
                    {this.state.filteredItems.map(item=>{
                        return(
                            <FilterItem 
                                key={item.id}
                                img={item.img}
                                name={item.name}
                                price={item.price}
                                amount={item.amount}

                            />
                        )
                            
                    })}
                    

                </div>
            </div>
           
          
        );
    }
}
