import React, { Component } from 'react';
import './createnewplaylist.scss';

export default class CreateNewPlaylist extends Component {

    render(){
        return (
            <section className="transparent">
                <div className="
                    createnewplaylist 
                    createnewplaylist--size 
                    createnewplaylist--theme">
                    <h3>New Playlist</h3>  
                    <form>
                        <input 
                            class="createnewplaylist__title" 
                            placeholder="Title"/>
                    </form>
                </div>
            </section>
        )
    }
}