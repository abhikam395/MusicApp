import React, { Component } from 'react';
import './navbar.scss';

import NavbarCenterComponent from './NavbarCenterComponent.jsx';
import NavbarLeftComponent from './NavbarLeftComponent.jsx';
import NavbarRightComponent from './NavbarRightComponent.jsx';

export default class NavBarComponent extends Component {

    render(){
        return (
            <nav className="navbar navbar--size navbar--theme">
                <NavbarLeftComponent/>
                <NavbarCenterComponent/>
                <NavbarRightComponent/>
            </nav>
        )
    }
}