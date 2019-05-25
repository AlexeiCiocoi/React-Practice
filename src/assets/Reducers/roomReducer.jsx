const introData = {
    roomId:false,
    rooms:[
        {   
            id:'WOW',
            roomName:'WOW',
            messages:[
                {
                    userName:'Alexei',
                    message:'Hello Andrew',
                    quest:false
                },
                {
                    userName:'Andrew',
                    message:'Hey Alexei',
                    quest:true
                },
            ]
        },
        {
            id:'Dota',
            roomName:'Dota',
            messages:[
                {
                    userName:'Cristiano',
                    message:'Hello Artur',
                    quest:false
                },
                {
                    userName:'Artur',
                    message:'Hey Cristiano',
                    quest:true
                },
            ]
        },
    ],
    selected:[]
}



const RoomReducer = (state = introData,action)=>{

   switch(action.type){
       case 'ADD_ROOM':
           
          let { id, roomName, messages } = action.data
          return{
              ...state,
             rooms:[
                 ...state.rooms,
                 {
                    id,
                    roomName,
                    messages
                }
             ]
 
          };
        case 'GET__MESSAGES': 
        
           let getRoomById = state.rooms.filter(message=> action.id.toUpperCase() === message.id.toUpperCase())
         
         
           return {
                ...state,
                roomId:getRoomById[0].id,
                selected:[ 
                    ...getRoomById[0].messages
                ]
          };
        case 'ADD_NEW-MESSAGE':
           let { userName, quest , message} = action.data
           let otherRooms = state.rooms.filter(room=> room.id.toUpperCase() != state.roomId.toUpperCase())
           let curRoom = state.rooms.filter(room=>room.id.toUpperCase() === state.roomId.toUpperCase())
           curRoom[0].messages.push({
            userName,
            message,
            quest
           })
           

           return{
              ...state,
                rooms:[
                    ...curRoom,
                   ...otherRooms,
                   
                    
                ],
                selected:[...curRoom[0].messages]
              

           }
     
   }
    return state
}

export default RoomReducer