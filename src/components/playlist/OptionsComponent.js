import React, { Component } from 'react';
import './options.scss';

import {  
    PlaylistAdd, 
    PlaylistPlay, 
    QueueMusic 
} from '@material-ui/icons';

export default class OptionsComponent extends Component {

    constructor(props){
        super(props);
        this.state = {
            options: [
                {id: 1, name: 'Play next', icon: PlaylistPlay},
                {id: 2, name: 'Add to queue', icon: QueueMusic},
                {id: 3, name: 'Add to playlist', icon: PlaylistAdd}
            ]
        }
        this.options = React.createRef();
    }

    componentDidMount(){
        console.log('componentDidMount')
        let context = this;
        document.getElementById('main').addEventListener('click', function (event) {
            console.log(event.target);
            context.props.hide();
        })

        this.options.current.addEventListener('click', function(event){
            event.stopPropagation();
        })
    }

    renderOption(option){
        let Icon = option.icon;

        return (
            <li key={option.id}
                className="
                    playlist__option 
                    playlist__option--size">
                <Icon size="small" className="option-icon"/>
                {option.name}
            </li>
        )
    }

    render(){
        let { options } = this.state;

        return (
            <ul 
                ref={this.options}
                className="
                    playlist__options 
                    playlist__options--size
                    playlist__options--theme">
                    { options.map(option => (this.renderOption(option))) }
            </ul>
        )
    }
}