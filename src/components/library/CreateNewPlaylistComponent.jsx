import React, { Component } from 'react';
import './createnewplaylist.scss';

export default class CreateNewPlaylist extends Component {

    constructor(props){
        super(props);
        this.onSaveButtonClick = this.onSaveButtonClick.bind(this);
        this.onCancelButtonClick = this.onCancelButtonClick.bind(this);
        console.log(this.props)
    }

    onCancelButtonClick(event){
        event.preventDefault();
        this.props.hideOverlay();
    }

    onSaveButtonClick(event){
        event.preventDefault();
        this.props.hideOverlay();
    }

    render(){
        return (
            <section className="transparent">
                <div className="
                    createnewplaylist 
                    createnewplaylist--size 
                    createnewplaylist--theme">
                    <h3>New Playlist</h3>  
                    <form className="
                        createnewplaylist__form 
                        createnewplaylist__form--size">
                        <input 
                            className="createnewplaylist__input" 
                            placeholder="Title"/>
                        <input 
                            className="createnewplaylist__input" 
                            placeholder="Description"/>  
                        <div className="createnewplaylist__privacy">
                            <label className="createnewplaylist__label">Privacy</label>  
                            <select className="createnewplaylist__options">
                                <option>Public</option>
                                <option>Private</option>
                                <option>Unlisted</option>
                            </select>
                        </div>
                        <div className="createnewplaylist__buttons">
                            <button 
                                className="createnewplaylist__cancel-button"
                                onClick={this.onCancelButtonClick}>CANCAL
                            </button>
                            <button 
                                className="createnewplaylist__save-button"
                                onClick={this.onSaveButtonClick}>SAVE
                            </button>
                        </div>
                    </form>
                </div>
            </section>
        )
    }
}