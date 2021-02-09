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
        this.imageHolder = React.createRef();
        this.onPreviousButtonClick = this.onPreviousButtonClick.bind(this);
        this.onNextButtonClick = this.onNextButtonClick.bind(this);
    }

    getArtistsName(artists){
        return artists.join(", ");
    }

    onPreviousButtonClick(){
        //songs list
        let list = this.list.current;
        //width of imageHolderElement
        let imageHolderSize = this.imageHolder.current.clientWidth;
        //add margin to imageHolderSize
        let sumSize = imageHolderSize + 30;
        //scroll backward
        list.scrollBy({left: -sumSize, behavior: 'smooth'});
        console.log(list)
    }

    onNextButtonClick(){
        //songs list
        let list = this.list.current;
        //width of imageHolderElement
        let imageHolderSize = this.imageHolder.current.clientWidth;
        //add margin to imageHolderSize
        let sumSize = imageHolderSize + 30;
        //scroll forword
        list.scrollBy({left: sumSize, behavior: 'smooth'});
        console.log(list)
    }

    hidePreviousButton(){
        let icon = this.previousIcon.current;
        icon.style.display = "none"
    }

    showPreviousButton(){
        let icon = this.previousIcon.current;
        icon.style.display = "flex"
    }

    hideNextButton(){
        let icon = this.nextIcon.current;
        icon.style.display = "none"
    }

    showNextButton(){
        let icon = this.nextIcon.current;
        icon.style.display = "flex"
    }


    showMoreAndPlaySongIcon(index){
        let moreIcon = document.getElementsByClassName('trending__more-icon')[index];
        let playSong = document.getElementsByClassName('trending__play-icon')[index];
      
        moreIcon.style.display = 'block';
        playSong.style.display = 'flex';
    }
    

    hideMoreAndPlaySongIcon(index){
        let moreIcon = document.getElementsByClassName('trending__more-icon')[index];
        let playSong = document.getElementsByClassName('trending__play-icon')[index];

        moreIcon.style.display = 'none';
        playSong.style.display = 'none';
    }

    renderSongItem(song, index){
        return (
            <li
                key={song.id}
                className="trending__item trending__item--size trending__item--theme">
                <div className="trending__imageholder">
                    <img className="trending__image trending__image--size"
                        src={song.image}/>
                    <PlayArrow className="trending__play-button"/>    
                </div>
                <span className="trending__rank">{song.id}</span>
                <div className="trending__song-info">
                    <h4 classNma="trending__song-name">{song.title}</h4>
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