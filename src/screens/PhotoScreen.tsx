import * as React from 'react';
import {useRoute} from '@react-navigation/native';
import ListPhoto from '../components/ListPhoto';

const fetchPhotoDataByAlbumId = async (albumId: string) => {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/photos?albumId=${albumId}`,
    {
      method: 'GET',
    },
  );
  const albums = await response.json();
  return albums;
};

const PhotoScreen = () => {
  const route = useRoute();
  const albumId = route?.params?.albumId || '';
  const [data, setData] = React.useState([]);

  React.useEffect(() => {
    const fetchData = async () => {
      const photoData = await fetchPhotoDataByAlbumId(albumId);
      setData(photoData);
    };
    if (albumId) {
      fetchData();
    }
  }, [albumId]);

  return <ListPhoto data={data} />;
};

export default PhotoScreen;
