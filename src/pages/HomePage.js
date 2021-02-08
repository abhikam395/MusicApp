import React, { Component} from 'react';
import './home.scss';

import MixedSongsLayoutHome from '../layouts/MixedSongsLayoutHome';

export default class HomePage extends Component {

    render(){
        return (
            <main className="homepage homepage--size">
                <MixedSongsLayoutHome/>
            </main>
        )
    }
}