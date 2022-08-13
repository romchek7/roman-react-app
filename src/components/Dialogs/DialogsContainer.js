import React from "react"
import {addMessage} from "../../redux/dialogsPageReducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {compose} from "redux";
import {withAuthUserRedirect} from "../../hoc/withAuthUserRedirect";

let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage
    }
}

export default compose(
    connect(mapStateToProps, {addMessage}),
    withAuthUserRedirect
)(Dialogs)