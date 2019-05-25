class newPostModal{
    modalGetData = data =>{
        return{
            type:'ADD_MODAL',
            data
        }
    }

     modalGetHandle = handle =>{
        return{
            type:'MODAL_HANDLE',
            handle
        }
    }
}

export default new newPostModal()