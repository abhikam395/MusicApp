import React, { Component } from 'react';
import './playlist.scss';

import { getPlaylist } from './../apis/playlistApi';
import { LibraryAdd } from '@material-ui/icons';

export default class PlaylistPage extends Component {

    render(){
        let playlist = getPlaylist();

        return (
            <main className="center">
                <div className="
                        playlist 
                        playlist--size">
                    <section className="
                        playlist__container 
                        playlist__container--size">

                        <img className="
                            playlist__image 
                            playlist__image--size"
                            src={playlist.image}/>
                        <div className="playlist__info">
                            <h1 className="playlist__name">{playlist.name}</h1>
                            <p className="playlist__description">{playlist.description}</p>
                            <div className="playlist__button-group">
                                <a role="button" className="playlist__button-shuffle">SHUFFLE</a>
                                <a role="button" className="playlist__button-addlibrary">ADD TO LIBRARY</a>
                            </div>
                        </div>    

                    </section>
                </div>
            </main>
        )
    }
}