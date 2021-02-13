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
        this.onIconClick = this.onIconClick.bind(this);
    }

    onIconClick(){
        this.setState({ profileComponentVisible: true })
    }

    render(){
        let { profileComponentVisible }  = this.state;

        return(
            <Fragment>
                { profileComponentVisible && <ProfileComponent/> }
                <div className="navbar__right navbar__right--size">
                    <AccountCircle 
                        className="navbar__profile navbar__profile--size"
                        onClick={this.onIconClick}
                    />
                </div>
            </Fragment>
        )
    }
}