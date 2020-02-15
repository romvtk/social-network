import React from 'react';
import style from './ProfileStatus.module.css';


class ProfileStatus extends React.Component {

    state = {
        editMode: false
    }

    activateEditMode()  {
        this.setState({editMode:true})
    }
    deactivateEditMode() {
        this.setState({editMode:false})
    }


    render() {
        return (
            <>
                {!this.state.editMode &&
                <div className={style.description_current_info}>
                    <span onDoubleClick={this.activateEditMode.bind(this)}>{this.props.aboutMe}</span>
                </div>
                }
                {this.state.editMode &&
                <div>
                    <input autoFocus={true} onBlur={this.deactivateEditMode.bind(this)} value={this.props.aboutMe}/>
                </div>
                }
            </>
        )
    }

}


export default ProfileStatus;