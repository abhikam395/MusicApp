import React, { Component} from 'react';
import './videos.scss';

export default class VideosPage extends Component {

    render(){
        return (
            <main className="center videopage">
                <h1 className="videopage__title">Music videos</h1>
                <ul className="videos videos--size">
                    { this.renderAlbums(albums) }
                </ul>
            </main>
        )
    }
}