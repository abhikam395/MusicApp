import React, { Component } from 'react';
import './profile.scss';

import { 
    AccountBox, 
    YouTube, 
    SupervisorAccount, 
    ExitToApp, 
    Feedback, 
    Help, 
    Settings, 
    History, 
    Backup,
    Security
} 

from '@material-ui/icons';

export default class ProfileComponent extends Component {

    constructor(){
        super();
        this.state = {
            options1 : [
                {id: 1, name: 'Your channel', icon: AccountBox },
                {id: 2, name: 'Get Music Premium', icon: YouTube },
                {id: 3, name: 'Switch Account', icon: SupervisorAccount },
                {id: 4, name: 'Sign out', icon: ExitToApp }
            ],
            options2 : [
                {id: 1, name: 'Upload music', icon: Backup },
                {id: 2, name: 'History', icon: History },
                {id: 3, name: 'Settings', icon: Settings },
                {id: 4, name: 'Terms & privacy policy', icon: Security },
                {id: 5, name: 'Help', icon: Help },
                {id: 6, name: 'Send feedback', icon: Feedback }
            ]
        }
    }

    renderIcon(icon){
        let Icon = icon;
        return <Icon className="profile__option-icon"/>
    }

    renderOption(option){
        return (
            <li key={option.id} 
                className="profile__option 
                    profile__option--size">
                    { this.renderIcon(option.icon) }
                    { option.name }
            </li>
        )
    }

    renderOptions(options){
        return options.map(option => this.renderOption(option));
    }
    
    render(){
        let { options1, options2 } = this.state;

        return (
            <div className="profile profile--size profile--theme">
                <ul className="profile__options">
                    { this.renderOptions(options1) }
                </ul>
                <hr className="profile__line"/>
                <ul className="profile__options">
                    { this.renderOptions(options2) }
                </ul>
            </div>
        )
    }
}