const introData ={
    modalHandle:false,
    modalContent:false
}


const modalReducer = (state = introData,action)=>{
    
    switch(action.type){
        case 'ADD_MODAL':
            
            return{

                ...state,
                modalContent:action.data
            } ;
                break;
           
        case 'MODAL_HANDLE':
           
            return{
            
            ...state,
            modalHandle:!state.modalHandle

            
        };
        break;
   
    }


    return state
}

export default modalReducer 