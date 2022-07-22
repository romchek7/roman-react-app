import React from "react";
import style from './Dialogs.module.css'
import Dialog from "./Dialog/Dialog";
import Messages from "./Messages/Messages";
import ChooseDialog from "./ChooseDialog/ChooseDialog";
import { useParams } from "react-router-dom";

const Dialogs = (props) => {
    const { id } = useParams();

    let dialogsElements = props.dialogsPage.dialogsArray.map(d => <Dialog id={d.id} name={d.name} />);



    return (
        <div className={style.main}>
            <div className={style.dialogs}>
                <div className={style.dialog}>
                    {dialogsElements}
                </div>
            </div>

            {id && (
                <Messages id={id}
                    messagesArray={props.dialogsPage.messagesArray}
                    dispatch={props.dispatch}
                    newMessageBody = {props.dialogsPage.newMessageBody} />
            )}

            {!id && (
                <ChooseDialog />
            )}
        </div>
    );
}

export default Dialogs;