import React from "react";
import style from './Dialogs.module.css'
import Dialog from "./Dialog/Dialog";
import Messages from "./Messages/Messages";
import ChooseDialog from "./ChooseDialog/ChooseDialog";
import { useParams } from "react-router-dom";

const Dialogs = () => {
    const { id } = useParams();

    return (
        <div className={style.main}>
            <div className={style.dialogs}>
                <div className={style.dialog}>
                    <Dialog id='1' name='Dialog 1' />
                    <Dialog id='2' name='Dialog 2' />
                    <Dialog id='3' name='Dialog 3' />
                    <Dialog id='4' name='Dialog 4' />
                    <Dialog id='5' name='Dialog 5' />
                    <Dialog id='6' name='Dialog 6' />
                    <Dialog id='7' name='Dialog 7' />
                    <Dialog id='8' name='Dialog 8' />
                    <Dialog id='9' name='Dialog 9' />
                    <Dialog id='10' name='Dialog 10' />
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