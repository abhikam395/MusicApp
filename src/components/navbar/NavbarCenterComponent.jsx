import React, { Component } from 'react';
import './navbarcenter.scss';

import { Link } from 'react-router-dom';
import { Search } from '@material-ui/icons';
 
export default class NavbarCenterComponent extends Component {

    constructor(props){
        super(props);
        this.state = {
            menuItems: ['Home', 'Explore', 'Library', 'Search'],
            previousListItem: null
        };
        // this.item = React.createRef([]);
        this.onClick = this.onClick.bind(this);
    }

    componentDidMount(){
        this.setState({
            previousListItem: document.getElementsByClassName('navbar__menuitem')[0]
        })
    }

    /**
     * select or unselect menu item on click
     * @param {*} event 
     */
    onClick(event){
        let context = event.target.parentNode;
        let { previousListItem } = this.state;

        if(previousListItem)
            previousListItem.style.color = 'grey';
        this.setState({ previousListItem: context });
        context.style.color = 'white';
    }

    getLinkPath(name){
        if(name == 'Home')
            return '/';
        return name.toLowerCase();    
    }

    renderMenuItem(item, index){
        return (
            <li className="navbar__menuitem navbar__menuitem--size" 
                key={index}
                onClick={this.onClick}>
                <Link to={this.getLinkPath(item)}>
                    {index == 3 ? <Search/> : ""}
                    {item}
                </Link>
            </li>
        )
    }

    renderMenuItems(items){
        return items.map((item, index) => this.renderMenuItem(item, index));
    }

    render(){
        return (
            <div className="navbar__center navbar__center--size">
                <ul className="navbar__menulist" 
                    ref={this.list}>
                    { this.renderMenuItems(this.state.menuItems) }
                </ul>
            </div>
        )
    }
}