import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';

const Dialogs = (props) => {

    let dialogsElements = props.state.dialogsData.map( d => {
        return(
            <DialogItem name={d.name} id={d.id} />
        )
    });

    let messageElements = props.state.messageData.map( m => {
        return(
           <Message message={m.message} />
        )
    });

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messageElements}
            </div>
        </div>
    );
}

export default Dialogs;