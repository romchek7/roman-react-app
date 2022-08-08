import React from "react"
import styles from './UserInformation.module.css'

class ProfileStatus extends React.Component {
    state = {
        editStatusMode: false
    }

    onClickActivateStatusMode() {
        this.setState({
            editStatusMode: true
        })
    }

    onClickDeactivateStatusMode() {
        this.setState({
            editStatusMode: false
        })
    }

    render() {
        return (
            <div>
                {!this.state.editStatusMode
                    ? <div>
                        <p onDoubleClick={this.onClickActivateStatusMode.bind(this)}>{this.props.status}</p>
                    </div>
                    : <div>
                        <input autoFocus={true} onBlur={this.onClickDeactivateStatusMode.bind(this)}
                               value={this.props.status}
                               className={styles.inputStatus}/>
                    </div>
                }
            </div>
        )
    }
}

export default ProfileStatus