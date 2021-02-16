import songImage from './../../assets/images/song-image.jpg';

const object =  {
    id: 1, 
    title: 'Be Like That', 
    artists: ['Kane Brown'], 
    image: songImage
}

export function getMusicVideos(){
    return new Array(100)
    .fill(object);;
}