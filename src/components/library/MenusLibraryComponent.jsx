import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './menuslibrary.scss';

export default class MenusLibraryComponent extends Component {

    constructor(props){
        super(props);
        this.state = {
            menus:  [
                {id: 1, name: 'PLAYLISTS'},
                {id: 2, name: 'ALBUMS'},
                {id: 3, name: 'SONGS'},
                {id: 4, name: 'ARTISTS'},
                {id: 5, name: 'SUBSCRIPTIONS'},
            ]
        }
    }

    getRoutePath(name){
        let { url } = this.props.match;
        return url + '/' + name.toLowerCase();
    }

    renderMenuItem(menu){
        return (
            <li key={menu.id}
                className="menulibrary menulibrary--size">
                <Link to={this.getRoutePath(menu.name)}
                    className="menulibrary__link">{menu.name}</Link>
            </li>
        )
    }

    renderMenuList(menus){
        return menus.map(menu => this.renderMenuItem(menu))
    }

    render(){
        let { menus } = this.state;

        return (
            <section className="center">
                <ul className="menuslibrary menuslibrary--size">
                    { this.renderMenuList(menus) }
                </ul>
                <div className="menuslibrary__line"/>
            </section>
        )
    }
}