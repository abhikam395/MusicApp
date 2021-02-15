import React, { Component } from 'react';
import './moodsgenre.scss';

import { getGenres, getMoods, getMoodsGenresForMe } from './../apis/moodsGenresApi';
import MoodGenreCard from './../components/common/MoodGenreCard.jsx';

export default class MoodsAndGenrePage extends Component {

    renderMoodGenre(item){
        return (
            <li 
                className="moodgenre" 
                key={item.id}>
                    {item.name}
            </li>
        )
    }

    renderMoodsGenres(list){
        return list.map((item) => <MoodGenreCard item={item}/>)
    }

    render(){
        return (
            <main className="center moodsgenres">
                <h1 className="moodsgenres__title">Moods & genres</h1>
                <h3 className="moodsgenres__subtitle">For you</h3>
                <ul class="moodsgenres__list">
                    { this.renderMoodsGenres(getMoodsGenresForMe()) }
                </ul>
                <h3 className="moodsgenres__subtitle">Moods</h3>
                <ul class="moodsgenres__list">
                    { this.renderMoodsGenres(getMoods()) }
                </ul>
                <h3 className="moodsgenres__subtitle">Genres</h3>
                <ul class="moodsgenres__list">
                    { this.renderMoodsGenres(getGenres()) }
                </ul>
            </main>
        )
    }
}