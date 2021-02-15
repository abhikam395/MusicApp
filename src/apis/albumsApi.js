const object = {
    id: 1, 
    name: 'Justin bieber', 
    artist: 'Boyfriend', 
    image: 'https://www.incimages.com/uploaded_files/image/1920x1080/getty_648521078_2000136020009280129_393608.jpg'
}

/**
 * fill array with 100 dummy object
 */
const albums = new Array(100)
            .fill(object);

export function getAlbums(){
    return albums;
}