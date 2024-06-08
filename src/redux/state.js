let ADD_POST = 'ADD-POST'

let UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'

let ADD_MESSAGE = 'ADD-MESSAGE'

let UPDATE_NEW_MESSAGE = 'UPDATE-NEW-MESSAGE'



let store  = {
     _state: {
        profilePage: {
            postsArray: [
                {id: 1, message: "Hi, how are you ?", likeCount:10},
                {id: 2, message: "I've got some news for you", likeCount: 20},
                {id: 3, message: "Hope, you are lucky", likeCount: 25} 
              ],
            newPostText:'kamasutra',
           
            },
    
messagesPage: {

    messagesArray: [
        {id:1, message:'Hi'},
        {id:2, message:'How are you ?'},
        {id:3, message:'I love It-kamasutra'},
        {id:4, message:'That is a great course'},
    ],

    newMessageText: 'New Message',
},
dialoguesArray: [
    {id:1, name:'Pavel'},
    {id:2, name:'Andrey'},
    {id:3, name:'Nicolay'},
    {id:4, name:'Alina'},
    {id:5, name:'Maria'},
    {id:6, name:'Victor'}
], 

 
    
    },
    getState () {
        //debugger;
        return this._state;
    },
    
    _callSubscriber () {
        console.log('Render has been changed')
    },

    subscriber (observer) {
        this._callSubscriber = observer;
    },
    

    // Методы, изменяющие state.
    
    // addPost () { 
     
    //     let newPost = {
    //         id: this._state.profilePage.newPostText.id,
    //         message: this._state.profilePage.newPostText,
    //         likeCount: 0
    //     }
    //     this._state.profilePage.postsArray.push(newPost);
    //     this._state.profilePage.newPostText = '';
    //     this._callSubscriber(this._state);
    // },
    
//    updateNewPost  (newText) {
//       this._state.profilePage.newPostText = newText;
//       console.log(newText);
//       this._callSubscriber(this._state);
//     },
    
    

    dispatch (action) {
debugger;
// action-type === 'ADD-POST'
if (action.type === ADD_POST)
    { 
        let newPost = {
            id: 5,
            message: this._state.profilePage.newPostText,
            likeCount: 0
        }
        this._state.profilePage.postsArray.push(newPost);
        this._state.profilePage.newPostText = '';
        this._callSubscriber(this._state);  
    } 
    else if // sction.type === 'UPDATE-NEW-POST-TEXT') 
    ( action.type === UPDATE_NEW_POST_TEXT )
        {
        this._state.profilePage.newPostText = action.newText;
        console.log(action.newText);
        this._callSubscriber(this._state);
    }
    else if (action.type === ADD_MESSAGE) {
let newMessage = {
    id: 0,
    message: this._state.messagesPage.newMessageText
}
this._state.messagesPage.messagesArray.push(newMessage)
this._callSubscriber(this._state);
    }

    else if (action.type === UPDATE_NEW_MESSAGE) {
         this._state.messagesPage.newMessageText = action.newTextMessage;
         this._callSubscriber(this._state);
            }

    }

}

export default store;


export const addPostActionCreator = () => {
    return ( 
        // type:'ADD-POST'
    {type: ADD_POST}
    )
  }
  
  export const updateNewPostTextActionCreator = (text)=> {
    return (
        // type: 'UPDATE-NEW-POST-TEXT'
      {type: UPDATE_NEW_POST_TEXT, newText: text}
    )
  }

  export const addMessageActionCreator = () => {
    return ( 
        // type:'ADD-MESSAGE'
    {type: ADD_MESSAGE}
    )

  }

  export const updateMessageActionCreator =(textMess)=> {
    return (
        {type:  UPDATE_NEW_MESSAGE, newTextMessage: textMess }

    )
}
  






