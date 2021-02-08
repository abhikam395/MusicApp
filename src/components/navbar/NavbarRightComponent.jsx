import React, { Component} from 'react';
import './navbarright.scss';

import { AccountCircle } from '@material-ui/icons';

export default class NavbarRightComponent extends Component {

    constructor(){
        super();
        this.onIconClick = this.onIconClick.bind(this);
    }

    onIconClick(){
        console.log(1)
    }

    render(){
        return(
            <div className="navbar__right navbar__right--size">
                <a 
                    href="/profile" 
                    className="navbar__profile-link">
                    <AccountCircle 
                        className="navbar__profile navbar__profile--size"
                        onClick={this.onIconClick}
                    />
                </a>
            </div>
        )
    }
}