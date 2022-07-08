import React from "react";
import style from './Dialogs.module.css'
import Dialog from "./Dialog/Dialog";
import Messages from "./Messages/Messages";
import ChooseDialog from "./ChooseDialog/ChooseDialog";
import { useParams } from "react-router-dom";

const Dialogs = () => {
    const { id } = useParams();

    let dialogsArray = [
    { id: '1', name:'Dialog 1'},
    { id: '2', name:'Dialog 2'},
    { id: '3', name:'Dialog 3'},
    { id: '4', name:'Dialog 4'},
    { id: '5', name:'Dialog 5'},
    { id: '6', name:'Dialog 6'},
    { id: '7', name:'Dialog 7'},
    { id: '8', name:'Dialog 8'},
    { id: '9', name:'Dialog 9'},
    { id: '10', name:'Dialog 10'}
    ]
    
    let dialogsElements = dialogsArray.map(d => <Dialog id={d.id} name={d.name} />);

    return (
        <div className={style.main}>
            <div className={style.dialogs}>
                <div className={style.dialog}>
                    {dialogsElements}
                </div>
            </div>

            {id && (
                <Messages id={id} />
            )}

            {!id && (
                <ChooseDialog />
            )}
        </div>
    );
}

export default Dialogs;