import React, { Component } from 'react';
import './albumslibrary.scss';

import { Album } from '@material-ui/icons';

export default class AlbumsLibraryPage extends Component {

    constructor(){
        super();
        this.state = {
            content: null
        }
    }

    render(){
        return(
            <section className="albumslibrary albumslibrary--size">
                <div className="center albumslibrary__content">
                    Albums
                </div>
            </section>
        )
    }
}