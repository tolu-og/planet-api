import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "./screens/HomeScreen";

import FormScreen from "./screens/FormScreen";

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{ headerShown: false, tabBarActiveTintColor: "#3B0087" }}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Form" component={FormScreen} />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
