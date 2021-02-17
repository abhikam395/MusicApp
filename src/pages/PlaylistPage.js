import React, { Component } from 'react';
import './playlist.scss';

import { getPlaylist } from './../apis/playlistApi';
import { 
    LibraryAdd, 
    Shuffle, 
    MoreVert
} from '@material-ui/icons';

import OptionsComponent from './../components/playlist/OptionsComponent';

export default class PlaylistPage extends Component {

    constructor(){
        super();
        this.state={ menuIconClicked: false, alreadyClicked: false }
        this.hideShowOptionsComponent = this.hideShowOptionsComponent.bind(this);
    }

    hideShowOptionsComponent(){
        let { menuIconClicked } = this.state;
        console.log(menuIconClicked + '  ' + this.state.alreadyClicked)
        this.setState({alreadyClicked: true})
        if(menuIconClicked)
            this.setState({menuIconClicked: false});
        else
            this.setState({menuIconClicked: true})    
    }

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
                                <a role="button" className="playlist__button-shuffle">
                                    <Shuffle className="playlist__icon"/>
                                    SHUFFLE
                                </a>
                                <a role="button" className="playlist__button-addlibrary">
                                    <LibraryAdd className="playlist__icon"/>
                                    ADD TO LIBRARY
                                </a>
                                <MoreVert className="playlist__option-icon" 
                                    onClick={ !this.state.alreadyClicked ? 
                                        this.hideShowOptionsComponent: null}/>
                                {this.state.menuIconClicked && 
                                    <OptionsComponent 
                                        hide={this.hideShowOptionsComponent}/> }
                            </div>
                        </div>    

                    </section>
                </div>
            </main>
        )
    }
}