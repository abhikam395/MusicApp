import React, { Component, Fragment } from 'react';
import './navbarright.scss';

import { AccountCircle } from '@material-ui/icons';
const ProfileComponent = React.lazy(() => import('./../common/ProfileComponent.jsx'));

export default class NavbarRightComponent extends Component {

    constructor(){
        super();
        this.state = {
            profileComponentVisible: false
        }
        this.showProfileComponent = this.showProfileComponent.bind(this);
        this.hideProfileComponent = this.hideProfileComponent.bind(this);
    }

    showProfileComponent(){
        this.setState({ profileComponentVisible: true });
    }

    hideProfileComponent(){
        this.setState({ profileComponentVisible: false });
    }

    render(){
        let { profileComponentVisible }  = this.state;

        return(
            <Fragment>
                { profileComponentVisible && <ProfileComponent hide={this.hideProfileComponent} /> }
                <div className="navbar__right navbar__right--size">
                    <AccountCircle 
                        className="navbar__profile navbar__profile--size"
                        onClick={this.showProfileComponent}
                    />
                </div>
            </Fragment>
        )
    }
}