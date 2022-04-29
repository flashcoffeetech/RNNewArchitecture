import * as React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';

export interface ListAlbumItemProps {
  title: string;
  id: string;
}

const ListAlbumItem = ({title, id}: ListAlbumItemProps) => {
  const navigation = useNavigation();
  const onPress = () => {
    navigation.push('Photo', {
      albumId: id,
    });
  };
  return (
    <TouchableOpacity
      style={{padding: 20, borderWidth: 1, backgroundColor: 'white'}}
      onPress={onPress}>
      <Text>{title}</Text>
    </TouchableOpacity>
  );
};

export default ListAlbumItem;
