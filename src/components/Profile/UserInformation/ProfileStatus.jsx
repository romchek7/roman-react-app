import React, {useEffect, useState} from "react"
import styles from './UserInformation.module.css'

let ProfileStatus = (props) => {
    let [status, setStatus] = useState(props.status)
    let [editStatusMode, setEditStatusMode] = useState(false)

    useEffect(() => {
        setStatus(props.status)
    }, [props.status])

    const onClickActivateStatusMode = () => {
        setEditStatusMode(true)
    }

    const onUserStatusUpdate = (e) => {
        setStatus(e.currentTarget.value)
    }

    const onClickDeactivateStatusMode = () => {
        setEditStatusMode(false)
    }

    const onClickDeactivateStatusModeAndUpdateStatus = () => {
        setEditStatusMode(false)
        props.updateUserStatusThunk(status)
    }

    return (
        <div>
            {!editStatusMode
                ? <div>
                    {props.authUserId !== props.userId
                        ? <p>{props.status || "No status"}</p>
                        : <p onDoubleClick={onClickActivateStatusMode}>{props.status || "No status"}</p>
                    }
                </div>
                : <div>
                    <input autoFocus={true}
                           value={status.toString()}
                           onChange={onUserStatusUpdate}
                           className={styles.inputStatus}/>
                    <button onClick={onClickDeactivateStatusMode} className={styles.cancelBtn}>Cancel</button>
                    <button onClick={onClickDeactivateStatusModeAndUpdateStatus} className={styles.saveBtn}>Save</button>
                </div>
            }
        </div>
    )
}

export default ProfileStatus