const initState = {
    posts:[
        {userId: 1, id: 1, title: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit", body: "quia et suscipit↵suscipit recusandae consequuntur …strum rerum est autem sunt rem eveniet architecto"},
        {userId: 1, id: 2, title: "qui est esse", body: "est rerum tempore vitae↵sequi sint nihil reprehend…aperiam non debitis possimus qui neque nisi nulla"},
        {userId: 1, id: 3, title: "ea molestias quasi exercitationem repellat qui ipsa sit aut", body: "et iusto sed quo iure↵voluptatem occaecati omnis e…↵molestiae porro eius odio et labore et velit aut"}

    ]
}


const postReducer = (state = initState,action)=>{
    
    switch(action.type){
        case 'DELETE_POST':
                let remainingPosts = state.posts.filter(post=> post.id !== action.id)
                return {
                    posts:remainingPosts
                }
            break;
        case 'ADD_POST':
            let newPosts = state.posts

            return {
                ...state,
                posts:[
                    ...state.posts,  
                    {
                        userId:state.posts.length++,
                        id:state.posts.length++,
                        title:action.data.title,
                        body:action.data.content
                    }
                ]
            }
    }

    return state
}

export default postReducer