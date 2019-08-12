import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import {sendNewMessageCreator, updateNewMessageBodyCreator} from "../redux/dialogs-reducer";

const Dialogs = (props) => {

    let state = props.dialogsPage;

    let dialogsElements = state.dialogsData.map( d => {
        return(
            <DialogItem name={d.name} id={d.id} />
        )
    });
    let messageElements = state.messageData.map( m => {
        return(
           <Message message={m.message} />
        )
    });
    let newMessageBody = state.newMessageBody;

    let onSendMessageClik = () => {
        props.sendMessage();
    }
    let onNewMessageChange = (e) => {
        let body = e.target.value;
        props.updateNewMessageBody(body);
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                <div>{messageElements}</div>
                <div>
                    <div>
                        <textarea value={newMessageBody}
                                   onChange={onNewMessageChange}
                                   placeholder='Enter your message'>
                        </textarea>
                    </div>
                    <div><button onClick={onSendMessageClik} >Send</button></div>
                </div>
            </div>
        </div>
    );
}

export default Dialogs;