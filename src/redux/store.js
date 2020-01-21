
import profileReducer from './profile-reducer';
import dialogsReducer from './dialogs-reducer';
import sidebarReducer from './sidebar-reducer';



let store = {
    _state: {
        profilePage: {
            posts: [{
                    id: 1,
                    message: 'Как твои дела?',
                    likesCount: 12
                },
                {
                    id: 2,
                    message: 'Всё здорово',
                    likesCount: 34
                }
            ],
            newPostText: 'Введите сообщение'
        },
        messagesPage: {
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
        },
        sidebar: {}

    },
    _callSubscriber() {
        console.log('123');
    },


    getState() {
        return this._state
    },
    subscriber(observer) {
        this._callSubscriber = observer;
    },



    dispatch(action) {

        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.messagesPage = dialogsReducer(this._state.messagesPage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);
        this._callSubscriber(this._state)

     
    }


}










export default store