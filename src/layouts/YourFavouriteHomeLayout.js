import React, { Component } from 'react';
import './yourfavourite.scss';
import justinBieberImage from './../../assets/images/justin-bieber.jpeg';
import postMaloneImage from './../../assets/images/postmalone.jpeg';
import drakeImage from './../../assets/images/drake.jpg';

import { NavigateNext, NavigateBefore, PlayArrow, MoreVert } from '@material-ui/icons';

export default class YourFavouriteHomeLayout extends Component {

    constructor(){
        super();
        this.state = {
            artists : [
                {id: 1, name: 'Drake', subscribers: "13.8M", image: drakeImage },
                {id: 2, name: 'Kygo', subscribers: "2.4M", image: justinBieberImage },
                {id: 3, name: 'Travis Scott', subscribers: "21.4M", image: drakeImage },
                {id: 4, name: 'Illenium', subscribers: "33.2M", image: postMaloneImage },
                {id: 5, name: 'Marshmello', subscribers: "13.9M", image: drakeImage },
                {id: 6, name: 'Post Malone', subscribers: "23.1M", image: postMaloneImage },
                {id: 7, name: 'Justin Bieber', subscribers: "43.5M", image: justinBieberImage },
            ]
        },
        this.nextIcon = React.createRef();
        this.previousIcon = React.createRef();
        this.list = React.createRef();
        this.imageHolder = React.createRef();
        this.onPreviousButtonClick = this.onPreviousButtonClick.bind(this);
        this.onNextButtonClick = this.onNextButtonClick.bind(this);
    }

    getArtistsName(artists){
        if(artists == undefined || artists == null || artists.length == 0)
            return "";
        return artists.join(", ");
    }

    onPreviousButtonClick(){
        //artists list
        let list = this.list.current;
        //width of imageHolderElement
        let imageHolderSize = this.imageHolder.current.clientWidth;
        //add margin to imageHolderSize
        let sumSize = imageHolderSize + 30;
        //scroll backward
        list.scrollBy({left: -sumSize, behavior: 'smooth'});
        console.log(list)
    }

    onNextButtonClick(){
        //artists list
        let list = this.list.current;
        //width of imageHolderElement
        let imageHolderSize = this.imageHolder.current.clientWidth;
        //add margin to imageHolderSize
        let sumSize = imageHolderSize + 30;
        //scroll forword
        list.scrollBy({left: sumSize, behavior: 'smooth'});
        console.log(list)
    }

    hidePreviousButton(){
        let icon = this.previousIcon.current;
        icon.style.display = "none"
    }

    showPreviousButton(){
        let icon = this.previousIcon.current;
        icon.style.display = "flex"
    }

    hideNextButton(){
        let icon = this.nextIcon.current;
        icon.style.display = "none"
    }

    showNextButton(){
        let icon = this.nextIcon.current;
        icon.style.display = "flex"
    }

    renderartistItem(artist, index){
        if(artist == undefined || artist == null)
            return;

        return (
            <li
                key={artist.id}
                className="yourfavourite__item yourfavourite__item--size yourfavourite__item--theme">
                <div className="yourfavourite__imageholder yourfavourite__imageholder--size"
                    ref={this.imageHolder}>
                    <img src={artist.image} 
                         className="yourfavourite__image yourfavourite__image--size"/>
                </div>
                <h4 className="yourfavourite__artist-name">
                    {artist.name}
                </h4>
                <p className="yourfavourite__artist-subscribers">
                    {artist.subscribers} <span>subscribers</span>
                </p>
            </li>
        )
    }

    renderartistList(artists){
        if(artists == undefined || artists == null || artists.length == 0)
            return;
        return artists.map((artist, index) => this.renderartistItem(artist, index));
    }

    render(){
        let { artists } = this.state;

        return (
            <section className="yourfavourite yourfavourite--size">
                <div className="center">
                    <div className="yourfavourite__content yourfavourite__content--size">
                        <h2 className="yourfavourite__title">Your favourites</h2>
                        <div className="row">
                            <div 
                                className="yourfavourite__icon yourfavourite__previous-icon" 
                                id="yourfavourite-previous"
                                ref={this.previousIcon}
                                onClick={this.onPreviousButtonClick}>
                                <NavigateBefore />
                            </div>
                            
                            <ul className="yourfavourite__list yourfavourite__list--size"
                                ref={this.list}>
                                { this.renderartistList(artists) }
                            </ul>
                            <div className="yourfavourite__icon yourfavourite__next-icon" 
                                id="yourfavourite-next"
                                ref={this.nextIcon}
                                onClick={this.onNextButtonClick}>
                                <NavigateNext />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}