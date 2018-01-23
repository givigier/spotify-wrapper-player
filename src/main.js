import spotify from './Spotify';
import renderAlbums from './AlbumList';
import renderAlbumInfo from './AlbumInfo';

const albums = spotify.search.albums('Beirut');
const albumList = document.getElementById('album-list');

const album = spotify.album.getAlbum('5N82AYJ3FG1znFz3EqJNMm');
const albumInfo = document.getElementById('album-info');

albums.then(data => renderAlbums(data.albums.items, albumList));
album.then(data => renderAlbumInfo(data, albumInfo));
