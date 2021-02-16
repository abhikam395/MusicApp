import React, { Component } from 'react';
import './newmusicvideosexplore.scss';

import { NavigateNext, NavigateBefore } from '@material-ui/icons';
import { Link } from 'react-router-dom';
import songImage from './../../../assets/images/song-image.jpg'

import NewMusicVideoComponent from './../../components/common/NewMusicVideoComponent.jsx';

export default class NewMusicVideosExploreLayout extends Component {

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

    onPreviousButtonClick(){
        //songs list
        let list = this.list.current;
        //width of imageHolderElement
        let imageHolderSize = this.imageHolder.current.clientWidth;
        //add margin to imageHolderSize
        let sumSize = imageHolderSize + 30;
        //scroll backward
        list.scrollBy({left: -sumSize, behavior: 'smooth'});
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
    }

    renderSongList(videos){
        return videos.map((video, index) => 
            <NewMusicVideoComponent
                key={index}
                index={index}
                video={video}
                ref={this.imageHolder}
                />
            );
    }

    render(){
        let { videos } = this.state;

        return (
            <section className="newmusicvideo newmusicvideo--size">
                <div className="center">
                    <div className="newmusicvideo__content newmusicvideo__content--size">
                        <div>
                            <Link 
                                to="/new_releases/videos" 
                                className="newmusicvideo__title">
                                New music videos
                            </Link>
                            <Link 
                                to="/new_releases/videos" 
                                className="newmusicvideo__see-all">
                                SEE ALL
                            </Link>
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
                                { this.renderSongList(videos) }
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