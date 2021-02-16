import image from './../../assets/images/song-image.jpg';

const songs = [
    {id: 1, name: 'POPSTAR(feat. Drake)', singer: 'DJ Khaled', duration: '8:06'},
    {id: 1, name: 'POPSTAR(feat. Drake)', singer: 'DJ Khaled', duration: '8:06'},
    {id: 1, name: 'POPSTAR(feat. Drake)', singer: 'DJ Khaled', duration: '8:06'},
    {id: 1, name: 'POPSTAR(feat. Drake)', singer: 'DJ Khaled', duration: '8:06'},
    {id: 1, name: 'POPSTAR(feat. Drake)', singer: 'DJ Khaled', duration: '8:06'},
    {id: 1, name: 'POPSTAR(feat. Drake)', singer: 'DJ Khaled', duration: '8:06'},
    {id: 1, name: 'POPSTAR(feat. Drake)', singer: 'DJ Khaled', duration: '8:06'},
    {id: 1, name: 'POPSTAR(feat. Drake)', singer: 'DJ Khaled', duration: '8:06'},
    {id: 1, name: 'POPSTAR(feat. Drake)', singer: 'DJ Khaled', duration: '8:06'},
    {id: 1, name: 'POPSTAR(feat. Drake)', singer: 'DJ Khaled', duration: '8:06'},
]

const playlist = {
    name: 'My Mix1',
    image: image,
    total: songs.length,
    totalDuration: '3 hours, 29 minutes',
    description: 'A mix of songs from one corner of your music world. Always updating.',
    songs: songs
}

export function getPlaylist(){
    return playlist;
}