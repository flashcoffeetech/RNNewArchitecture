import * as React from 'react';
import {FlatList, Text} from 'react-native';
import ListAlbumItem, {ListAlbumItemProps} from './ListAlbumItem';

interface Item {
  item: ListAlbumItemProps;
}

interface ListAlbumProps {
  data: Array<ListAlbumItemProps>;
}

const ListAlbum = ({data}: ListAlbumProps) => {
  const renderItem = ({item}: Item) => {
    return <ListAlbumItem title={item.title} id={item.id} />;
  };
  return (
    <FlatList
      data={data}
      renderItem={renderItem}
      ListEmptyComponent={<Text>NO DATA</Text>}
    />
  );
};

export default ListAlbum;
