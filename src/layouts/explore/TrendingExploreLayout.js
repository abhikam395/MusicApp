import React, { Component } from 'react';
import './trendingexplore.scss';

import { 
    NavigateNext, 
    NavigateBefore, 
    PlayArrow, 
    MoreVert, 
    ThumbDownOutlined, 
    ThumbUpOutlined 
}  from '@material-ui/icons';
import songImage from './../../../assets/images/song-image.jpg'

export default class NewtrendingHomeLayout extends Component {

    constructor(){
        super();
        this.state = {
            songs : [
                {id: 1, title: 'Be Like That', artist: ['Kane Brown'], views: '52M', image: songImage },
                {id: 2, title: 'Be Like That', artist: ['Kane Brown'], views: '52M', image: songImage },
                {id: 3, title: 'Be Like That', artist: ['Kane Brown'], views: '52M', image: songImage },
                {id: 4, title: 'Be Like That', artist: ['Kane Brown'], views: '52M', image: songImage },
                {id: 5, title: 'Be Like That', artist: ['Kane Brown'], views: '52M', image: songImage },
                {id: 6, title: 'Be Like That', artist: ['Kane Brown'], views: '52M', image: songImage },
                {id: 7, title: 'Be Like That', artist: ['Kane Brown'], views: '52M', image: songImage },
                {id: 8, title: 'Be Like That', artist: ['Kane Brown'], views: '52M', image: songImage },
                {id: 9, title: 'Be Like That', artist: ['Kane Brown'], views: '52M', image: songImage },
                {id: 10, title: 'Be Like That', artist: ['Kane Brown'], views: '52M', image: songImage },
                {id: 11, title: 'Be Like That', artist: ['Kane Brown'], views: '52M', image: songImage },
                {id: 12, title: 'Be Like That', artist: ['Kane Brown'], views: '52M', image: songImage },
                {id: 13, title: 'Be Like That', artist: ['Kane Brown'], views: '52M', image: songImage },
                {id: 14, title: 'Be Like That', artist: ['Kane Brown'], views: '52M', image: songImage },
            ]
        },
        this.nextIcon = React.createRef();
        this.previousIcon = React.createRef();
        this.list = React.createRef();
        this.listItem = React.createRef();
        this.onPreviousButtonClick = this.onPreviousButtonClick.bind(this);
        this.onNextButtonClick = this.onNextButtonClick.bind(this);
    }

    getArtistsName(artists){
        return artists.join(", ");
    }

    onMouseEnter(index){
        let icons = document.getElementsByClassName('trending__icons')[index];
        let playIcon = document.getElementsByClassName('trending__play-button')[index];
        let image = document.getElementsByClassName('trending__image')[index];
        image.style.opacity = '.3';
        playIcon.style.opacity = '1'
        icons.style.display = 'flex';
    }

    onMouseLeave(index){
        let icons = document.getElementsByClassName('trending__icons')[index];
        let playIcon = document.getElementsByClassName('trending__play-button')[index];
        let image = document.getElementsByClassName('trending__image')[index];
        image.style.opacity = '1';
        playIcon.style.opacity = '0';
        icons.style.display = 'none';
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

    renderSongItem(song, index){
        return (
            <li
                onMouseEnter={this.onMouseEnter.bind(this, index)}
                onMouseLeave={this.onMouseLeave.bind(this, index)}
                ref={this.listItem}
                key={song.id}
                className="trending__item trending__item--size trending__item--theme">
                <div className="trending__imageholder">
                    <img className="trending__image trending__image--size"
                        src={song.image}/>
                    <PlayArrow className="trending__play-button"/>    
                </div>
                <span className="trending__rank">{song.id}</span>
                <div className="trending__song-info">
                    <h4 className="trending__song-name">{song.title}</h4>
                    <p>{song.artist[0]} 
                        <div className="trending__point"></div>
                        <span className="trending__views">{song.views}</span>
                        views
                    </p>
                </div>  
                <div className="trending__icons">
                    <ThumbDownOutlined className="trending__dislike-icon"/>
                    <ThumbUpOutlined className="trending__like-icon"/>
                    <MoreVert className="trending__more-icon"/>
                </div>
            </li>
        )
    }

    renderSongList(songs){
        return songs.map((song, index) => this.renderSongItem(song, index));
    }

    render(){
        let { songs } = this.state;

        return (
            <section className="trending trending--size">
                <div className="center">
                    <div className="trending__content trending__content--size">
                        <div>
                            <a href="#albums" className="trending__title">Treading</a>
                            <a href="#albums" className="trending__see-all">SEE ALL</a>
                        </div>
                        <div className="row">
                            <div 
                                className="trending__icon trending__previous-icon" 
                                id="trending-previous"
                                ref={this.previousIcon}
                                onClick={this.onPreviousButtonClick}>
                                <NavigateBefore />
                            </div>
                            
                            <ul className="trending__list trending__list--size"
                                ref={this.list}>
                                { this.renderSongList(songs) }
                            </ul>
                            <div className="trending__icon trending__next-icon" 
                                id="trending-next"
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