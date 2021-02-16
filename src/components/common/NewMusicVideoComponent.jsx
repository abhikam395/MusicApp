import React from 'react';
import './newmusicvideo.scss';

import { PlayArrow, MoreVert } from '@material-ui/icons';

function showIcons(index){
    let moreIcon = document.getElementsByClassName('newmusicvideo__more-icon')[index];
    let playVideo = document.getElementsByClassName('newmusicvideo__play-icon')[index];
  
    moreIcon.style.display = 'block';
    playVideo.style.display = 'flex';
}


function hideIcons(index){
    let moreIcon = document.getElementsByClassName('newmusicvideo__more-icon')[index];
    let playVideo = document.getElementsByClassName('newmusicvideo__play-icon')[index];

    moreIcon.style.display = 'none';
    playVideo.style.display = 'none';
}

function getArtistsName(artists){
    return artists.join(", ");
}

function returnMusicVideo(props, ref){
    let { video, index } = props;

    return (
        <li
            className="
                newmusicvideo__item 
                newmusicvideo__item--size 
                newmusicvideo__item--theme">
            <div className="
                newmusicvideo__imageholder 
                newmusicvideo__imageholder--size"
                ref={ref}
                onMouseEnter={() => showIcons(index)}
                onMouseLeave={() => hideIcons(index)}>
                <div className="newmusicvideo__more-icon">
                    <MoreVert/>
                </div>
                <img src={video.image} 
                    className="newmusicvideo__image 
                    newmusicvideo__image--size"/>
                <div className="
                    newmusicvideo__play-icon 
                    newmusicvideo__play-icon--size">
                    <PlayArrow/>
                </div>
            </div>
            <h4 className="newmusicvideo__video-name">
                {video.title}
            </h4>
            <p className="newmusicvideo__artist-name">
                {getArtistsName(video.artists)}
            </p>
        </li>
    )
}

export default React.forwardRef(returnMusicVideo);