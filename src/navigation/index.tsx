import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import BottomTabNavigator from './BottomTabNavigator'

const MainNavigation = () => {
  return (
    <NavigationContainer>
      <BottomTabNavigator/>
    </NavigationContainer>
  )
}

export default MainNavigation