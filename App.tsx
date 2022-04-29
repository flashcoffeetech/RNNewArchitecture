import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AlbumScreen from './src/screens/AlbumScreen';
import PhotoScreen from './src/screens/PhotoScreen';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Album"
          component={AlbumScreen}
          options={{title: 'New Architecture'}}
        />
        <Stack.Screen
          name="Photo"
          component={PhotoScreen}
          options={{title: 'New Architecture'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
