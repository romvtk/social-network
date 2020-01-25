const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';

const SEND_MESSAGE = 'SEND_MESSAGE';

let initialState = {
    dialogs: [{
            id: 1,
            name: 'Иван'
        },
        {
            id: 2,
            name: 'Мария'
        },
        {
            id: 3,
            name: 'Виктория'
        }
    ],
    messages: [{
            id: 1,
            message: 'Первое сообщение'
        },
        {
            id: 2,
            message: 'Второе сообщение'
        },
        {
            id: 3,
            message: 'Третие сообщение'
        },
        {
            id: 4,
            message: 'Четвёртое сообщение'
        },
        {
            id: 5,
            message: 'Пятое сообщение'
        }
    ],
    newMessageBody: ''
}

const dialogsReducer = (state = initialState, action) => {




    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            return {
                ...state,
                newMessageBody: action.body
            };
           
        case SEND_MESSAGE:
            let body = state.newMessageBody;
           return {
                ...state,
                newMessageBody: '',
                messages: [...state.messages, {id: 6, message: body}]
            }
          
        default:
            return state;


    }


}


export const sendMessageCreator = () => ({
    type: SEND_MESSAGE
})
export const updateNewMessageBodyCreator = (body) => ({
    type: UPDATE_NEW_MESSAGE_BODY,
    body: body
})


export default dialogsReducer;