import React, { Component } from 'react';
import './liveperformance.scss';
import songImage from './../../assets/images/song-image.jpg';

import { NavigateNext, NavigateBefore, PlayArrow, MoreVert } from '@material-ui/icons';

import NewMusicVideoComponent from './../components/common/NewMusicVideoComponent.jsx';

export default class LivePerformanceHomeLayout extends Component {

    constructor(){
        super();
        this.state = {
            videos : [
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
        //videos list
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
        //videos list
        let list = this.list.current;
        //width of imageHolderElement
        let imageHolderSize = this.imageHolder.current.clientWidth;
        //add margin to imageHolderSize
        let sumSize = imageHolderSize + 30;
        //scroll forword
        list.scrollBy({left: sumSize, behavior: 'smooth'});
        console.log(list)
    }

    renderSongList(videos){
        return videos.map((video, index) => (
            <NewMusicVideoComponent
                key={index}
                index={index}
                video={video}
                ref={this.imageHolder}>

            </NewMusicVideoComponent>
        ));
    }

    render(){
        let { videos } = this.state;

        return (
            <section className="liveperformance liveperformance--size">
                <div className="center">
                    <div className="liveperformance__content liveperformance__content--size">
                        <h2 className="liveperformance__title">Mixed for you</h2>
                        <div className="row">
                            <div 
                                className="liveperformance__icon liveperformance__previous-icon" 
                                id="liveperformance-previous"
                                ref={this.previousIcon}
                                onClick={this.onPreviousButtonClick}>
                                <NavigateBefore />
                            </div>
                            
                            <ul className="liveperformance__list liveperformance__list--size"
                                ref={this.list}>
                                { this.renderSongList(videos) }
                            </ul>
                            <div className="liveperformance__icon liveperformance__next-icon" 
                                id="liveperformance-next"
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