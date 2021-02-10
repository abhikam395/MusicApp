import React, { Component } from 'react';
import './newmusicvideosexplore.scss';

import { NavigateNext, NavigateBefore, PlayArrow, MoreVert } from '@material-ui/icons';
import songImage from './../../../assets/images/song-image.jpg'

export default class NewMusicVideosExploreLayout extends Component {

    constructor(){
        super();
        this.state = {
            songs : [
                {id: 1, title: 'Be Like That', artists: ['Kane Brown'], image: songImage },
                {id: 2, title: 'Be Like That', artists: ['Kane Brown'], image: songImage },
                {id: 3, title: 'Be Like That', artists: ['Kane Brown'], image: songImage },
                {id: 4, title: 'Be Like That', artists: ['Kane Brown'], image: songImage },
                {id: 5, title: 'Be Like That', artists: ['Kane Brown'], image: songImage },
                {id: 6, title: 'Be Like That', artists: ['Kane Brown'], image: songImage },
                {id: 7, title: 'Be Like That', artists: ['Kane Brown'], image: songImage },
                {id: 8, title: 'Be Like That', artists: ['Kane Brown'], image: songImage },
                {id: 9, title: 'Be Like That', artists: ['Kane Brown'], image: songImage },
                {id: 10, title: 'Be Like That', artists: ['Kane Brown'], image: songImage },
                {id: 11, title: 'Be Like That', artists: ['Kane Brown'], image: songImage },
                {id: 12, title: 'Be Like That', artists: ['Kane Brown'], image: songImage },
                {id: 13, title: 'Be Like That', artists: ['Kane Brown'], image: songImage },
                {id: 14, title: 'Be Like That', artists: ['Kane Brown'], image: songImage },
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
        let moreIcon = document.getElementsByClassName('newmusicvideo__more-icon')[index];
        let playSong = document.getElementsByClassName('newmusicvideo__play-icon')[index];
      
        moreIcon.style.display = 'block';
        playSong.style.display = 'flex';
    }
    

    hideMoreAndPlaySongIcon(index){
        let moreIcon = document.getElementsByClassName('newmusicvideo__more-icon')[index];
        let playSong = document.getElementsByClassName('newmusicvideo__play-icon')[index];

        moreIcon.style.display = 'none';
        playSong.style.display = 'none';
    }

    renderSongItem(song, index){
        return (
            <li
                key={song.id}
                className="newmusicvideo__item newmusicvideo__item--size newmusicvideo__item--theme">
                <div className="newmusicvideo__imageholder newmusicvideo__imageholder--size"
                    ref={this.imageHolder}
                    onMouseEnter={this.showMoreAndPlaySongIcon.bind(this, index)}
                    onMouseLeave={this.hideMoreAndPlaySongIcon.bind(this, index)}>
                    <div className="newmusicvideo__more-icon">
                        <MoreVert/>
                    </div>
                    <img src={song.image} 
                         className="newmusicvideo__image newmusicvideo__image--size"/>
                    <div 
                        className="newmusicvideo__play-icon newmusicvideo__play-icon--size">
                        <PlayArrow/>
                    </div>
                </div>
                <h4 className="newmusicvideo__song-name">
                    {song.title}
                </h4>
                <p className="newmusicvideo__artist-name">
                    {this.getArtistsName(song.artists)}
                </p>
            </li>
        )
    }

    renderSongList(songs){
        return songs.map((song, index) => this.renderSongItem(song, index));
    }

    render(){
        let { songs } = this.state;

        return (
            <section className="newmusicvideo newmusicvideo--size">
                <div className="center">
                    <div className="newmusicvideo__content newmusicvideo__content--size">
                        <div>
                            <a href="#albums" className="newmusicvideo__title">New albums and singles</a>
                            <a href="#albums" className="newmusicvideo__see-all">SEE ALL</a>
                        </div>
                        <div className="row">
                            <div 
                                className="newmusicvideo__icon newmusicvideo__previous-icon" 
                                id="newmusicvideo-previous"
                                ref={this.previousIcon}
                                onClick={this.onPreviousButtonClick}>
                                <NavigateBefore />
                            </div>
                            
                            <ul className="newmusicvideo__list newmusicvideo__list--size"
                                ref={this.list}>
                                { this.renderSongList(songs) }
                            </ul>
                            <div className="newmusicvideo__icon newmusicvideo__next-icon" 
                                id="newmusicvideo-next"
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