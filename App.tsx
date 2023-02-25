/* eslint-disable prettier/prettier */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import Home from './screens/Home';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Details from './screens/Details';
import PlayButton from './components/PlayButton';




const Stack = createNativeStackNavigator();

const App = () => 
  {
 
  return (

    <NavigationContainer>

      <Stack.Navigator>
        <Stack.Screen name="Home"    component={Home}  options = {
          { headerTransparent : true }
        } />
        <Stack.Screen name="Details"  component={Details} options = {
          { headerTransparent : true }
        }  />
      </Stack.Navigator>

    </NavigationContainer>
   
   
  );

}



export default App;
