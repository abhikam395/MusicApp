import React, { Component, Fragment } from 'react';
import './playlistlibrary.scss';

import createPlaylistImage from './../../assets/images/create-playlist.png';
const CreateNewPlaylist = React.lazy(() => import('./../components/library/CreateNewPlaylistComponent.jsx'));

export default class PlaylistLibraryPage extends Component {

    constructor(){
        super();
        this.state = {
            overlayVisible: false
        }
        this.onHideOverlay = this.onHideOverlay.bind(this);
        this.showOverlayComponent = this.showOverlayComponent.bind(this);
    }

    onHideOverlay(){
        this.setState({overlayVisible: false });
    }

    showOverlayComponent(){
        this.setState({overlayVisible: true})
    }

    render(){
        let { overlayVisible } = this.state;

        return(
            <Fragment>
                { overlayVisible && <CreateNewPlaylist hideOverlay={this.onHideOverlay}/> }
                <section className="playlistlibrary playlistlibrary--size center">
                    <select
                        name="filter" 
                        id="filter" 
                        className="filter filter--size">
                        <option value="A to Z" className="filter__option">A to Z</option>
                        <option value="Z to A" className="filter__option">Z to A</option>
                    </select>
                    <div className="playlistlibrary__row">
                        <a  
                            href="#"
                            className="newplaylist newplaylist--size"
                            onClick={this.showOverlayComponent}>
                            <img 
                                className="newplaylist__image newplaylist__image--size"
                                src={createPlaylistImage}
                            />
                            <h4>New Playlist</h4>
                        </a>
                    </div>

                    <ul className="playlistlibrary__list playlistlibrary__list--size">
                        
                    </ul>
                </section>
            </Fragment>
        )
    }
}