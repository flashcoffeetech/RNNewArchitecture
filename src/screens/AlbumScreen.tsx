import * as React from 'react';
import ListAlbum from '../components/ListAlbum';

const fetchAlbumData = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/albums', {
    method: 'GET',
  });
  const albums = await response.json();
  return albums;
};

const AlbumScreen = () => {
  const [data, setData] = React.useState([]);

  React.useEffect(() => {
    const fetchData = async () => {
      const albumData = await fetchAlbumData();
      setData(albumData);
    };
    fetchData();
  }, []);

  return <ListAlbum data={data} />;
};

export default AlbumScreen;
