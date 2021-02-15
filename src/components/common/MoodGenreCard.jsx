import React from 'react';
import './moodgenrecard.scss';

import getRendomColor from './../../utils/generateRandomColor';

function moodGenreCard(props, ref){
    let { item } = props;    
    let color = getRendomColor();

    return (
        <li
            ref={ref}
            key={item.id}
            className="moodgenre__item moodgenre__item--size moodgenre__item--theme">
            <div className="moodgenre__color" style={{ backgroundColor: color}}/>
            <h5 className="moodgenre__name">
                {item.name}
            </h5>
        </li>
    )
}

export default React.forwardRef(moodGenreCard);