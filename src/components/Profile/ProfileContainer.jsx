import React from 'react';
import Profile from './Profile';
import {connect} from 'react-redux';
import {getUserProfile} from './../../redux/profile-reducer';
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";
import {withRouter} from "react-router-dom";


class ProfileContainer extends React.Component {


    componentDidMount() {
        let userID = this.props.match.params.userID;
        if (!userID) {
            userID = 2
        }
        this.props.getUserProfile(userID)
    }

    render() {
        return (
            <>
                <Profile  {...this.props} profile={this.props.profile}/>
            </>
        )

    }

}


let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    isAuth: state.auth.isAuth
});

export default compose(
    connect(mapStateToProps, {getUserProfile}),
    withRouter,
   // withAuthRedirect
    )(ProfileContainer)


// let AuthRedirectComponent = withAuthRedirect(ProfileContainer)
// const WithUrlDataContainerComponent = withRouter(AuthRedirectComponent);
// export default connect(mapStateToProps, {getUserProfile})(WithUrlDataContainerComponent);
