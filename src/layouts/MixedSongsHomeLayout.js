import React, { Component } from 'react';
import './mixedsongs.scss';
import songImage from './../../assets/images/song-image.jpg';

import { NavigateNext, NavigateBefore, PlayArrow, MoreVert } from '@material-ui/icons';

export default class MixedSongsHomeLayout extends Component {

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
        let moreIcon = document.getElementsByClassName('mixedsong__more-icon')[index];
        let playSong = document.getElementsByClassName('mixedsong__play-icon')[index];
      
        moreIcon.style.display = 'block';
        playSong.style.display = 'flex';
    }
    

    hideMoreAndPlaySongIcon(index){
        let moreIcon = document.getElementsByClassName('mixedsong__more-icon')[index];
        let playSong = document.getElementsByClassName('mixedsong__play-icon')[index];

        moreIcon.style.display = 'none';
        playSong.style.display = 'none';
    }

    renderSongItem(song, index){
        return (
            <li
                key={song.id}
                className="mixedsong__item mixedsong__item--size mixedsong__item--theme">
                <div className="mixedsong__imageholder mixedsong__imageholder--size"
                    ref={this.imageHolder}
                    onMouseEnter={this.showMoreAndPlaySongIcon.bind(this, index)}
                    onMouseLeave={this.hideMoreAndPlaySongIcon.bind(this, index)}>
                    <div className="mixedsong__more-icon">
                        <MoreVert/>
                    </div>
                    <img src={song.image} 
                         className="mixedsong__image mixedsong__image--size"/>
                    <div 
                        className="mixedsong__play-icon mixedsong__play-icon--size">
                        <PlayArrow/>
                    </div>
                </div>
                <h4 className="mixedsong__song-name">
                    {song.title}
                </h4>
                <p className="mixedsong__artist-name">
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
            <section className="mixedsong mixedsong--size">
                <div className="center">
                    <div className="mixedsong__content mixedsong__content--size">
                        <h2 className="mixedsong__title">Mixed for you</h2>
                        <div className="row">
                            <div 
                                className="mixedsong__icon mixedsong__previous-icon" 
                                id="mixedsong-previous"
                                ref={this.previousIcon}
                                onClick={this.onPreviousButtonClick}>
                                <NavigateBefore />
                            </div>
                            
                            <ul className="mixedsong__list mixedsong__list--size"
                                ref={this.list}>
                                { this.renderSongList(songs) }
                            </ul>
                            <div className="mixedsong__icon mixedsong__next-icon" 
                                id="mixedsong-next"
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