import * as React from 'react';
import {Image, Text, View} from 'react-native';

export interface ListPhotoItemProps {
  title: string;
  thumbnailUrl: string;
}

const ListPhotoItem = ({title, thumbnailUrl}: ListPhotoItemProps) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        padding: 20,
        borderWidth: 1,
        backgroundColor: 'white',
        alignItems: 'center'
      }}>
      <Image source={{uri: thumbnailUrl}} style={{width: 50, height: 50}}/>
      <View style={{padding: 20, alignItems: 'center', flex: 1}}>
        <Text>{title}</Text>
      </View>
    </View>
  );
};

export default ListPhotoItem;
