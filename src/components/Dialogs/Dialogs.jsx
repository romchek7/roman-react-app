import React from "react"
import style from './Dialogs.module.css'
import Dialog from "./Dialog/Dialog"
import Messages from "./Messages/Messages";
import {Field, reduxForm} from "redux-form";

const CreateMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field name={'message'} component={'textarea'} placeholder="Write a message..."/>
            <button>Send</button>
        </form>
    )
}

const CreateMessageReduxForm = reduxForm({
    form: 'message'
})(CreateMessageForm)

const Dialogs = (props) => {
    let dialogsElements = props.dialogsPage.dialogsArray.map(d => <Dialog id={d.id} name={d.name}/>)
    let messagesElements = props.dialogsPage.messagesArray.map(m => <Messages id={m.id} message={m.message}/>)

    let onSubmit = (formValue) => {
        props.addMessage(formValue.message)
    }

    return (
        <div className={style.main}>
            <div className={style.dialogs}>
                <div className={style.dialog}>
                    {dialogsElements}
                </div>
            </div>
            <div className={style.mainMessages}>
                <div className={style.userInfo}>
                        <span>
                            Dialog
                        </span>
                </div>
                <div className={style.messages}>
                    <div className={style.messageText}>
                        Message
                    </div>
                    {messagesElements}
                </div>
                <div className={style.addMessage}>
                    <CreateMessageReduxForm onSubmit={onSubmit}/>
                </div>
            </div>
        </div>
    )
}

export default Dialogs