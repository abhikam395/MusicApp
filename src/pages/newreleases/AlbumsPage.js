import React, { Component } from 'react';
import './albums.scss';

import { getAlbums } from './../../apis/albumsApi';
import { PlayCircleFilledWhiteOutlined, MoreVertOutlined } from '@material-ui/icons';

export default class AlbumsPage extends Component {

    constructor(){
        super();
    }

    hideIcons(index){
        let playIcon = document.getElementsByClassName('album__playicon')[index];
        let optionsIcon = document.getElementsByClassName('album__optionsicon')[index];

        optionsIcon.style.visibility = 'hidden';
        playIcon.style.visibility = 'hidden';
    }

    showIcons(index){
        let playIcon = document.getElementsByClassName('album__playicon')[index];
        let optionsIcon = document.getElementsByClassName('album__optionsicon')[index];

        optionsIcon.style.visibility = 'visible';
        playIcon.style.visibility = 'visible';
    }

    renderAlbum(album, index){
        let PlayIcon = PlayCircleFilledWhiteOutlined;
        let OptionsIcon = MoreVertOutlined;

        return (
                <li 
                    className="album album--size"
                    key={index}>
                    <div 
                        onMouseOver={this.showIcons.bind(this, index)}
                        onMouseLeave={this.hideIcons.bind(this, index)}
                        className="album__imageholder
                            album__imageholder--size">
                        <PlayIcon 
                            ref={this.playIcon}
                            className="album__playicon"
                        />
                        <OptionsIcon 
                            ref={this.optionsIcon}
                            className="album__optionsicon"
                        />
                        <img 
                            src={album.image}
                            className="
                                album__image 
                                album__image--size"/>
                    </div>
                    <h4 className="album__name">{album.name}</h4>
                    <p className="album__artist">{album.artist}</p>
                </li>
            )
    }

    renderAlbums(albums){
        return albums.map((album, index) => this.renderAlbum(album, index));
    }

    render(){
        let albums = getAlbums();

        return (
            <main className="center albumlayout">
                <h1 className="albumlayout__title">Albums and singles</h1>
                <ul className="albums albums--size">
                    { this.renderAlbums(albums) }
                </ul>
            </main>
        )
    }
}