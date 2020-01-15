let rerenderEntireTree = () => {
    console.log('123');
    
}


let state = {
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
        ]
    },
    sidebar: {}

}

export const addPost = () => {

    const newPost = {
        id: 3,
        message: state.profilePage.newPostText,
        likesCount: 0 };
    state.profilePage.posts.push(newPost);
    state.profilePage.newPostText = '';
    rerenderEntireTree(state);
}

export const updateNewPostText = (newText) => {

    state.profilePage.newPostText = newText

    rerenderEntireTree(state)
}

export const  subscriber = (observer) =>{
    rerenderEntireTree = observer;
}

export default state;