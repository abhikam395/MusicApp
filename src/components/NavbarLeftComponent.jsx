import React, { Component} from 'react';
import './navbarleft.scss';

import youtubeIcon from './../../assets/images/youtubemusic.png';

export default class NavbarLeftComponent extends Component {

    render() {
        return (
            <div className="navbar__left navbar__left--size">
                <img 
                    className= "navbar__icon navbar__icon--size" 
                    src= {youtubeIcon}/>
                <h2 className="navbar__app-name">Music</h2>    
            </div>
        )
    }
}