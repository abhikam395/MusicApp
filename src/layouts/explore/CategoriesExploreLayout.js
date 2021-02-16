import React, { Component } from 'react';
import './categoriesexplore.scss';

import { TrendingUp, Mood, NewReleases } from '@material-ui/icons';

export default class CategoriesExploreLayout extends Component {

    constructor(props){
        super(props);
        this.state = {
            categories: [
                {id: 1, name: 'New releases', link: '/new_releases',  icon: NewReleases},
                {id: 2, name: 'Charts', link: '/charts', icon: TrendingUp},
                {id: 3, name: 'Moods & genres', link:'/moods_and_genres', icon: Mood}
            ]
        }
        this.alreadySelectedCategory = null;
        this.onCategorySelect = this.onCategorySelect.bind(this);
    }

    /**
     * set first item of list as alreadySelectedCategory
     */
    componentDidMount(){
        this.setState({
            alreadySelectedCategory: document.getElementsByClassName('categories__item')[0]
        })
    }

    /**
     * called when user select category
     * @param {*} event 
     */
    onCategorySelect(link, event){
        let categoryElement = event.currentTarget;
        let { alreadySelectedCategory } = this.state;
        
        alreadySelectedCategory.style.backgroundColor = '#292929';
        categoryElement.style.backgroundColor = '#212121';

        this.setState({ alreadySelectedCategory: categoryElement })

        this.props.history.push(link)
    }

    
    /**
     * return category
     * @param {*} category 
     */
    renderCategory(category){
        const Icon = category.icon;

        return (
            <li className="categories__item categories__item--size categories__item--theme"
                key={category.id}
                onClick={this.onCategorySelect.bind(this, category.link)}>
                <Icon className="categories__item-icon"/>
                <h2 className="categories__item-name">{category.name}</h2>
            </li>
        )
    }

    /**
     * return list of categories
     * @param {*} categories 
     */
    renderCategories(categories){
        return categories.map(category => this.renderCategory(category))
    }
    
    render() {
        let { categories } = this.state;

        return (
            <section className="categories categories--size">
                <div className="center">
                    <ul className="categories__list categories__list--size">
                        { this.renderCategories(categories) }
                    </ul>
                </div>
            </section>
        )
    }
}