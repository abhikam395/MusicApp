import React, { Component } from 'react';
import './searchbar.scss';

import { ArrowBack, Clear } from '@material-ui/icons';

export default class SearchbarComponent extends Component {

    constructor(props){
        super(props);
        this.state = {
            query: null
        }

        this.queryElement = React.createRef();
        this.hide = this.hide.bind(this);
        this.clearQuery = this.clearQuery.bind(this);
        this.onSearchQueryChange = this.onSearchQueryChange.bind(this);
    }

    hide(){
        this.props.hideSearchbar();
    }

    onSearchQueryChange(event){
        let { value } = event.target;
        if(value.trim().length == 0)
            this.setState({ query: null })
        else
            this.setState({ query: value })
    }

    clearQuery(){
        this.setState({ query: null });
        let inputElement = this.queryElement.current;
        inputElement.value = "";
    }

    render(){
        let { query } = this.state;

        return (
            <div className="searchbar searchbar--size searchbar--theme">
                <ArrowBack 
                    className="searchbar__backarrow"
                    onClick={this.hide}/>
                <input 
                    ref={this.queryElement}
                    className="
                        searchbar__input 
                        searchbar__input--size 
                        searchbar__input--theme" 
                    type="test" 
                    placeholder="Search"
                    onChange={this.onSearchQueryChange}/>
                { query && <Clear 
                        className="searchbar__clear"
                        onClick={this.clearQuery}/> }
            </div>
        )
    }
}