import React, { Component, Fragment } from 'react';
import './navbarcenter.scss';

import { Link } from 'react-router-dom';
import { Search } from '@material-ui/icons';

const SearchbarComponent = React.lazy(() => import('./../common/SearchbarComponent.jsx'));
 
export default class NavbarCenterComponent extends Component {

    constructor(props){
        super(props);
        this.state = {
            menuItems: ['Home', 'Explore', 'Library', 'Search'],
            previousListItem: null,
            searchbarComponentVisible: false
        };
        this.hideSearchbar = this.hideSearchbar.bind(this);
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
    onClick(index, event){
        if(index == 3){
            this.setState({ searchbarComponentVisible: true })
            return;
        }

        let context = event.target.parentNode;
        let { previousListItem } = this.state;

        if(previousListItem)
            previousListItem.style.color = 'grey';
        this.setState({ previousListItem: context });
        context.style.color = 'white';
    }

    hideSearchbar(){
        this.setState({ searchbarComponentVisible: false })
    }

    getLinkPath(name){
        if(name == 'Home')
            return '/';
        return name.toLowerCase();    
    }

    renderMenuItem(item, index){
        if(index == 3){
            return (
                <li className="navbar__menuitem navbar__menuitem--size" 
                    key={index}
                    onClick={this.onClick.bind(this, index)}>
                    <Search/>
                    {item}
                </li>
            )
        }
        return (
            <li className="navbar__menuitem navbar__menuitem--size" 
                key={index}
                onClick={this.onClick.bind(this, index)}>
                <Link to={this.getLinkPath(item)}>
                    {item}
                </Link>
            </li>
        )
    }

    renderMenuItems(items){
        return items.map((item, index) => this.renderMenuItem(item, index));
    }

    render(){
        let { searchbarComponentVisible } = this.state;
        console.log(searchbarComponentVisible)

        return (
            <div className="navbar__center navbar__center--size">
                { searchbarComponentVisible && <SearchbarComponent hideSearchbar={this.hideSearchbar}/>}
                <ul className="navbar__menulist" 
                    ref={this.list}>
                    { this.renderMenuItems(this.state.menuItems) }
                </ul>
            </div>
        )
    }
}