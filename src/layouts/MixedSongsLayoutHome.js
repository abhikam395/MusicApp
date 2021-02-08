import React, { Component } from 'react';
import './mixedsongs.scss';
import songImage from './../../assets/images/song-image.jpg';

import { NavigateNext, NavigateBefore, PlayArrow, MoreVert } from '@material-ui/icons';

export default class MixedSongsLayoutHome extends Component {

    constructor(){
        super();
        this.state = {
            songs : [
                {id: 1, title: 'Be Like That', artists: [{id: 1, name: 'Kane Brown'}], image: songImage },
                {id: 2, title: 'Be Like That', artists: [{id: 1, name: 'Kane Brown'}], image: songImage },
                {id: 3, title: 'Be Like That', artists: [{id: 1, name: 'Kane Brown'}], image: songImage },
                {id: 4, title: 'Be Like That', artists: [{id: 1, name: 'Kane Brown'}], image: songImage },
                {id: 5, title: 'Be Like That', artists: [{id: 1, name: 'Kane Brown'}], image: songImage },
                {id: 6, title: 'Be Like That', artists: [{id: 1, name: 'Kane Brown'}], image: songImage },
                {id: 7, title: 'Be Like That', artists: [{id: 1, name: 'Kane Brown'}], image: songImage },
            ]
        },
        this.nextIcon = React.createRef();
        this.previousIcon = React.createRef();
        this.list = React.createRef();
        this.onPreviousButtonClick = this.onPreviousButtonClick.bind(this);
        this.onNextButtonClick = this.onNextButtonClick.bind(this);
        this.onMouseEnterImageHolder = this.onMouseEnterImageHolder.bind(this);
        this.onMouseLeaveImageHolder = this.onMouseLeaveImageHolder.bind(this);
    }

    onPreviousButtonClick(){
        console.log('onPreviousButtonClick')
    }

    onNextButtonClick(){
        let list = this.list.current;
    }

    onMouseEnterImageHolder(index){
        let moreIcon = document.getElementsByClassName('mixedsong__more-icon')[index];
        let playSong = document.getElementsByClassName('mixedsong__play-icon')[index];
      
        moreIcon.style.display = 'block';
        playSong.style.display = 'flex';
    }

    onMouseLeaveImageHolder(index){
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
                    onMouseEnter={this.onMouseEnterImageHolder.bind(this, index)}
                    onMouseLeave={this.onMouseLeaveImageHolder.bind(this, index)}>
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