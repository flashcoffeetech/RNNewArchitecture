import * as React from 'react';
import {FlatList, Text} from 'react-native';
import ListPhotoItem, {ListPhotoItemProps} from './ListPhotoItem';

interface Item {
  item: ListPhotoItemProps;
}

interface ListPhotoProps {
  data: Array<ListPhotoItemProps>;
}

const ListPhoto = ({data}: ListPhotoProps) => {
  const renderItem = ({item}: Item) => {
    return (
      <ListPhotoItem title={item.title} thumbnailUrl={item.thumbnailUrl} />
    );
  };
  return (
    <FlatList
      data={data}
      renderItem={renderItem}
      ListEmptyComponent={<Text>NO DATA</Text>}
    />
  );
};

export default ListPhoto;
