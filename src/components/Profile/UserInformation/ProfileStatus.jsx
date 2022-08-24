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
    }

    onClickDeactivateStatusModeAndUpdateStatus = () => {
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
                        {this.props.authUserId !== this.props.userId
                            ? <p>{this.props.status || "No status"}</p>
                            : <p onDoubleClick={this.onClickActivateStatusMode}>{this.props.status || "No status"}</p>
                        }
                    </div>
                    : <div>
                        <input autoFocus={true}
                               value={this.state.status}
                               onChange={this.onUserStatusUpdate}
                               className={styles.inputStatus}/>
                        <button onClick={this.onClickDeactivateStatusMode} className={styles.cancelBtn}>Cancel</button>
                        <button onClick={this.onClickDeactivateStatusModeAndUpdateStatus} className={styles.saveBtn}>Save</button>
                    </div>
                }
            </div>
        )
    }
}

export default ProfileStatus