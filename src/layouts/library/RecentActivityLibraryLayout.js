import React, { Component } from 'react';
import './recentactivitylibrary.scss';
import songImage from './../../../assets/images/song-image.jpg';

import { 
    NavigateNext, 
    NavigateBefore, 
    PlayArrow, 
    MoreVert, 
    History
} from '@material-ui/icons';

export default class RecentActivityLibraryLayout extends Component {

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
        let moreIcon = document.getElementsByClassName('recentactivity__more-icon')[index];
        let playSong = document.getElementsByClassName('recentactivity__play-icon')[index];
      
        moreIcon.style.display = 'block';
        playSong.style.display = 'flex';
    }
    

    hideMoreAndPlaySongIcon(index){
        let moreIcon = document.getElementsByClassName('recentactivity__more-icon')[index];
        let playSong = document.getElementsByClassName('recentactivity__play-icon')[index];

        moreIcon.style.display = 'none';
        playSong.style.display = 'none';
    }

    renderSongItem(song, index){
        return (
            <li
                key={song.id}
                className="recentactivity__item recentactivity__item--size recentactivity__item--theme">
                <div className="recentactivity__imageholder recentactivity__imageholder--size"
                    ref={this.imageHolder}
                    onMouseEnter={this.showMoreAndPlaySongIcon.bind(this, index)}
                    onMouseLeave={this.hideMoreAndPlaySongIcon.bind(this, index)}>
                    <div className="recentactivity__more-icon">
                        <MoreVert/>
                    </div>
                    <img src={song.image} 
                         className="recentactivity__image recentactivity__image--size"/>
                    <div 
                        className="recentactivity__play-icon recentactivity__play-icon--size">
                        <PlayArrow/>
                    </div>
                </div>
                <h4 className="recentactivity__song-name">
                    {song.title}
                </h4>
                <p className="recentactivity__artist-name">
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
            <section className="recentactivity recentactivity--size">
                <div className="center">
                    <div className="recentactivity__content recentactivity__content--size">
                        <div className="recentactivity__label">
                            <h5 className="recentactivity__title">Recent Activity</h5>
                            <a href="#" className="recentactivity__history-icon"><History/></a>
                        </div>
                        <div className="row">
                            <div 
                                className="recentactivity__icon recentactivity__previous-icon" 
                                id="recentactivity-previous"
                                ref={this.previousIcon}
                                onClick={this.onPreviousButtonClick}>
                                <NavigateBefore />
                            </div>
                            
                            <ul className="recentactivity__list recentactivity__list--size"
                                ref={this.list}>
                                { this.renderSongList(songs) }
                            </ul>
                            <div className="recentactivity__icon recentactivity__next-icon" 
                                id="recentactivity-next"
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