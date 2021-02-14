import React, { Component } from 'react';
import './moodsgenresexplore.scss';

import { NavigateNext, NavigateBefore } from '@material-ui/icons';
import { Link } from 'react-router-dom';

import getRendomColor from './../../utils/generateRandomColor';

export default class MoodsGenresExploreLayout extends Component {

    constructor(){
        super();
        this.state = {
            genres : [
                {id: 1, name: 'Classical' },
                {id: 2, name: 'Folk & Traditional' },
                {id: 3, name: '1980s' },
                {id: 4, name: '1960s' },
                {id: 5, name: 'Hindustani Classical' },
                {id: 6, name: 'Folk' },
                {id: 7, name: 'Devotional' },
                {id: 8, name: 'Focus' },
                {id: 9, name: '1990s' },
                {id: 10, name: 'African' },
                {id: 11, name: '1970s' },
                {id: 12, name: '2000s' },
                {id: 13, name: 'Hindi' },
                {id: 14, name: '1970s' },
                {id: 15, name: '2000s' },
                {id: 16, name: 'Hindi' },
                {id: 17, name: 'African' },
                {id: 18, name: '1970s' },
                {id: 19, name: '2000s' },
                {id: 20, name: 'Hindi' },
                {id: 21, name: '1970s' },
                {id: 22, name: '2000s' },
                {id: 23, name: 'Hindi' },
            ]
        },
        this.nextIcon = React.createRef();
        this.previousIcon = React.createRef();
        this.list = React.createRef();
        this.listItem = React.createRef();
        this.onPreviousButtonClick = this.onPreviousButtonClick.bind(this);
        this.onNextButtonClick = this.onNextButtonClick.bind(this);
    }

    componentDidMount() {
        let listElement = this.list.current;
        let { genres } = this.state;
        listElement.style.setProperty('--columns', Math.ceil(genres.length / 3));
    }

    getArtistsName(artists){
        return artists.join(", ");
    }

    onPreviousButtonClick(){
        //songs list
        let list = this.list.current;
        //width of listItemElement
        let listItemSize = this.listItem.current.clientWidth;
        //add margin to listItemSize
        let sumSize = listItemSize + 30;
        //scroll backward
        list.scrollBy({left: -sumSize, behavior: 'smooth'});
    }

    onNextButtonClick(){
        //songs list
        let list = this.list.current;
        //width of listItemElement
        let listItemSize = this.listItem.current.clientWidth;
        //add margin to listItemSize
        let sumSize = listItemSize + 30;
        //scroll forword
        list.scrollBy({left: sumSize, behavior: 'smooth'});
    }

    renderSongItem(genre){
        let color = getRendomColor();

        return (
            <li
                ref={this.listItem}
                key={genre.id}
                className="moodsgenres__item moodsgenres__item--size moodsgenres__item--theme">
                <div className="moodsgenres__color" style={{ backgroundColor: color}}/>
                <h5 className="moodsgenres__name">
                    {genre.name}
                </h5>
            </li>
        )
    }

    renderSongList(genres){
        return genres.map((genre) => this.renderSongItem(genre));
    }

    render(){
        let { genres } = this.state;

        return (
            <section className="moodsgenres moodsgenres--size">
                <div className="center">
                    <div className="moodsgenres__content moodsgenres__content--size">
                        <div>
                            <Link to="/moods_and_genres"
                                className="moodsgenres__title">
                                    Moods & genres
                            </Link>
                            <Link to="/moods_and_genres"
                                className="moodsgenres__see-all">
                                    SEE ALL
                            </Link>
                        </div>
                        <div className="row">
                            <div 
                                className="moodsgenres__icon moodsgenres__previous-icon" 
                                id="moodsgenres-previous"
                                ref={this.previousIcon}
                                onClick={this.onPreviousButtonClick}>
                                <NavigateBefore />
                            </div>
                            
                            <ul className="moodsgenres__list moodsgenres__list--size"
                                ref={this.list}>
                                { this.renderSongList(genres) }
                            </ul>
                            <div className="moodsgenres__icon moodsgenres__next-icon" 
                                id="moodsgenres-next"
                                ref={this.nextIcon}
                                onClick={this.onNextButtonClick}>
                                <NavigateNext />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}