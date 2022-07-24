import React from "react";
import style from './Dialogs.module.css'
import Dialog from "./Dialog/Dialog";
import ChooseDialog from "./ChooseDialog/ChooseDialog";
import {useParams} from "react-router-dom";
import MessagesContainer from "./Messages/MessagesContainer";
import StoreContext from "../../StoreContext";

const Dialogs = () => {
    const {id} = useParams();

    return <StoreContext.Consumer>
        {
            store => {
                let state = store.getState()

                let dialogsElements = state.dialogsPage.dialogsArray.map(d => <Dialog id={d.id} name={d.name}/>);

                return (
                    <div className={style.main}>
                        <div className={style.dialogs}>
                            <div className={style.dialog}>
                                {dialogsElements}
                            </div>
                        </div>

                        {id && (
                            <MessagesContainer store={store} id={id}/>
                        )}

                        {!id && (
                            <ChooseDialog/>
                        )}
                    </div>
                );
            }
        }
    </StoreContext.Consumer>
}

export default Dialogs;