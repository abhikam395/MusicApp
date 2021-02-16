import React, { Component} from 'react';
import './videos.scss';

import {  getMusicVideos } from './../../apis/videosApi';
import NewMusicVideoComponent from './../../components/common/NewMusicVideoComponent.jsx';

export default class VideosPage extends Component {

    renderMusicVideos(videos){
        return videos.map((video, index) => (
            <NewMusicVideoComponent
                key={video.id}
                index={index}
                video={video}>

            </NewMusicVideoComponent>
        ))
    }

    render(){
        let videos = getMusicVideos();

        return (
            <main className="center videopage">
                <h1 className="videopage__title">Music videos</h1>
                <ul className="videos videos--size">
                    { this.renderMusicVideos(videos) }
                </ul>
            </main>
        )
    }
}