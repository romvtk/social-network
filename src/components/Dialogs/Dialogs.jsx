import React from 'react';
import style from './Dialogs.module.css';

import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import { updateNewMessageBodyCreator, sendMessageCreator } from './../../redux/dialogs-reducer';


const Dialogs = (props) => {

    let state = props.messagesPage

    let dialogsElements = state.dialogs
        .map(dialog => <DialogItem name={dialog.name} id={dialog.id} />)


        console.log(dialogsElements);
        
    let messagesElements = (state.messages)
        .map(message => <Message message={message.message} />)

    let newMessageBody = state.newMessageBody;


    let onSendMessageClick = () => {
        props.sendMessage()
    }


    let onNewMessageChange = (e) => {
        let body = e.target.value;
        props.updateNewMessageBody(body)

    }

    return (
        <div className={style.dialogs__wrapper}>

            <div className={style.dialogs}>
                {dialogsElements}
            </div>

            <div className={style.messages}>
                <div>{messagesElements}</div>
                <div>
                    <textarea
                        placeholder="Введите сообщение"
                        value={newMessageBody}
                        onChange={onNewMessageChange}
                    >
                    </textarea>
                </div>
                <div><button onClick={onSendMessageClick}>Отправить</button></div>


            </div>
        </div>
    )
}


export default Dialogs;