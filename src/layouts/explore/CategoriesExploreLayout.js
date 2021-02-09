import React, { Component } from 'react';
import './categoriesexplore.scss';

import { TrendingUp, Mood, NewReleases } from '@material-ui/icons';

export default class CategoriesExploreLayout extends Component {

    constructor(){
        super();
        this.state = {
            categories: [
                {id: 1, name: 'New releases', icon: NewReleases},
                {id: 2, name: 'Charts', icon: TrendingUp},
                {id: 3, name: 'Moods & genres', icon: Mood}
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
    onCategorySelect(event){
        let categoryElement = event.currentTarget;
        let { alreadySelectedCategory } = this.state;
        
        alreadySelectedCategory.style.backgroundColor = '#292929';
        categoryElement.style.backgroundColor = '#212121';

        this.setState({ alreadySelectedCategory: categoryElement })
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
                onClick={this.onCategorySelect}>
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