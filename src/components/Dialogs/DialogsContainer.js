import React from "react"
import {addMessage} from "../../redux/dialogsPageReducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {compose} from "redux";
import {withAuthUserRedirect} from "../../hoc/withAuthUserRedirect";
import {getDialogsSelector} from "../../selectors/dialogsSelectors";

let mapStateToProps = (state) => {
    return {
        dialogsPage: getDialogsSelector(state)
    }
}

export default compose(
    connect(mapStateToProps, {addMessage}),
    withAuthUserRedirect
)(Dialogs)