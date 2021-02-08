import React, { Component, Fragment } from 'react';
import './navbar.scss';

import NavbarCenterComponent from './NavbarCenterComponent.jsx';
import NavbarLeftComponent from './NavbarLeftComponent.jsx';
import NavbarRightComponent from './NavbarRightComponent.jsx';

export default class NavBarComponent extends Component {

    constructor(props){
        super(props);
    }

    componentDidMount(){
        let mainPage = document.getElementById('main');
        mainPage.addEventListener('resize', function (e){
            console.log(e)
        })
    }

    render(){
        return (
            <Fragment>
                <nav className="navbar navbar--size navbar--theme">
                    <NavbarLeftComponent/>
                    <NavbarCenterComponent/>
                    <NavbarRightComponent/>
                </nav>
                <div className="navbar__divider"></div>
            </Fragment>
        )
    }
}