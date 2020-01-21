 let initialState = { }
 
 
 const sidebarReducer = (state = initialState, action) => {



  return state;
    // if (action.type === ADD_POST) {
    //     const newPost = {
    //         id: 3,
    //         message: this._state.profilePage.newPostText,
    //         likesCount: 0
    //     };
    //     this._state.profilePage.posts.push(newPost);
    //     this._state.profilePage.newPostText = '';
    //     this._callSubscriber(this._state);
    // } else if (action.type === UPDATE_NEW_POST_TEXT) {
    //     this._state.profilePage.newPostText = action.newText
    //     this._callSubscriber(this._state)
    // } else if (action.type === UPDATE_NEW_MESSAGE_BODY) {
    //     this._state.messagesPage.newMessageBody = action.body
    //     this._callSubscriber(this._state)
    // } else if (action.type === SEND_MESSAGE) {
    //     let body = this._state.messagesPage.newMessageBody;
    //     this._state.messagesPage.newMessageBody = '';
    //     this._state.messagesPage.messages.push({id:6, message: body})
    //     this._callSubscriber(this._state)
    // }
}

export default sidebarReducer;