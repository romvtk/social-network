import React from 'react'
import { connect } from 'react-redux'
import Users from './Users'
import { followActionCreator, unfollowActionCreator } from '../../redux/users-reducer'
import { setUsersActionCreator } from './../../redux/users-reducer';


let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        follow: (userID) => {
            dispatch(followActionCreator(userID))
        },
        unfollow: (userID) => {
            dispatch(unfollowActionCreator(userID))
        },
        setUsers: (users) => {
            dispatch(setUsersActionCreator(users))
        }


    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Users)