import Storage from '../../utils/Storage.jsx'

const toDoList = {
    items: Storage.getStateByKey('ToDoList')
       
    ,
    showStatus:'inWork',
}



const todoReducer = (state = toDoList,action)=>{
   
    switch(action.type){

        case 'FILTER_BY_STATUS': 
                
                return{
                    ...state,
                    items:[...state.items],
                    showStatus:action.status
                }
                    break;

        case 'CREATE_TODO':
           
            let {status,content} = action.data
            Storage.setNewData('ToDoList',[
                ...state.items,
                        {
                            id:state.items.length+1,
                            status,
                            content
                        }
                       
            ])
                return{
                    items:[
                        ...state.items,
                        {
                            id:state.items.length+1,
                            status,
                            content
                        },
                       
                    ],
                    showStatus:'inWork'
                }
                    break;

        case 'CHANGE_STATUS': 
                if(action.data.status === 'delete'){
                    
                    state.items = state.items.filter(item=> item.id !==  action.data.id)
                    Storage.setNewData('ToDoList',state.items)
                    return {
                        ...state
                    }
                }else{
                     
                     let otherItems = state.items.filter(item => item.id !== action.data.id )
                     let itemToRefactor = state.items.find(item => item.id == action.data.id) 
                     
                      Storage.setNewData('ToDoList',[
                        ...otherItems,
                        {
                            id:action.data.id,
                            content:itemToRefactor.content,
                            status:action.data.status                                
                        }
                      ])
                    return{
                        ...state,
                        items:[...otherItems,
                                {
                                    id:action.data.id,
                                    content:itemToRefactor.content,
                                    status:action.data.status                                
                                }
                            ]
                    } 
                }

             
                
                    break;
            
    }
   
    
    return state
    
}


export default todoReducer