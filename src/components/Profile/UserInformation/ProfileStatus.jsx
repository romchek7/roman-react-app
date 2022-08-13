import React from "react"
import styles from './UserInformation.module.css'

class ProfileStatus extends React.Component {
    state = {
        editStatusMode: false,
        status: this.props.status
    }

    onClickActivateStatusMode = () => {
        this.setState({
            editStatusMode: true
        })
    }

    onClickDeactivateStatusMode = () => {
        this.setState({
            editStatusMode: false
        })
        this.props.updateUserStatusThunk(this.state.status)
    }

    onUserStatusUpdate = (e) => {
        this.setState({
            status: e.currentTarget.value
        })
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.status !== this.props.status) {
            this.setState({
                state: this.props.status
            })
        }
    }

    render() {
        return (
            <div>
                {!this.state.editStatusMode
                    ? <div>
                        <p onDoubleClick={this.onClickActivateStatusMode}>{this.props.status || "No status"}</p>
                    </div>
                    : <div>
                        <input autoFocus={true} onBlur={this.onClickDeactivateStatusMode}
                               value={this.state.status}
                               onChange={this.onUserStatusUpdate}
                               className={styles.inputStatus}/>
                    </div>
                }
            </div>
        )
    }
}

export default ProfileStatus