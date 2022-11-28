import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeStack from './HomeStack';
import FavoriteScreen from '../screens/FavoriteScreen';
import BagScreen from '../screens/BagScreen';
import ProfileScreen from '../screens/ProfileScreen';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator screenOptions={{headerShown: false}}>
      <Tab.Screen name='HomeStack' component={HomeStack}/>
      <Tab.Screen name='FavoriteScreen' component={FavoriteScreen}/>
      <Tab.Screen name='BagScreen' component={BagScreen}/>
      <Tab.Screen name='ProfileScreen' component={ProfileScreen}/>
    </Tab.Navigator>
  )
}

export default BottomTabNavigator