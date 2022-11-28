import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeStack from "./HomeStack";
import FavoriteScreen from "../screens/FavoriteScreen";
import BagScreen from "../screens/BagScreen";
import ProfileScreen from "../screens/ProfileScreen";
import { Entypo } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { colors } from "../colors";

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName="HomeStack"
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarInactiveTintColor: colors.gray,
        tabBarActiveTintColor: colors.green,
        tabBarStyle:{
          backgroundColor: colors.white,
          borderTopLeftRadius: 45,
          borderTopRightRadius: 45,
        },
      }}
    >
      <Tab.Screen
        name="HomeStack"
        component={HomeStack}
        options={{
          tabBarIcon: ({ color }) => (
            <Entypo name="home" size={24} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="FavoriteScreen"
        component={FavoriteScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <Entypo name="heart" size={24} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="BagScreen"
        component={BagScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <Entypo name="shopping-bag" size={24} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="ProfileScreen"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="account" size={24} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
