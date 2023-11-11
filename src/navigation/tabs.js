import React from "react";
import { View, Text } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  MaterialCommunityIcons,
  FontAwesome,
  Ionicons,
} from "@expo/vector-icons";

import { appStyles } from "../styles/AppBaseLayout";
import Home from "../screens/Home";
import Budgets from "../screens/Budgets";
import Category from "../screens/Category";
import Goals from "../screens/Goals";

const Tab = createBottomTabNavigator();

const TabBar = () => {
  const getTabBarIcon = (iconName, size, color) => (
    <View style={appStyles.tabBarIconContainer}>
      {iconName === "Home" && (
        <Ionicons name="home" size={size} color={color} />
      )}
      {iconName === "Budgets" && (
        <MaterialCommunityIcons name="finance" size={size} color={color} />
      )}
      {iconName === "Category" && (
        <FontAwesome name="list-alt" size={size} color={color} />
      )}
      {iconName === "Goals" && (
        <Ionicons name="ios-hourglass-outline" size={size} color={color} />
      )}
      <Text style={appStyles.tabBarIconText}>{iconName}</Text>
    </View>
  );

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        headerShown: false,
        tabBarStyle: appStyles.tabBar,
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ focused }) =>
            getTabBarIcon("Home", 20, focused ? "#64CCC5" : "#176B87"),
        }}
      />
      <Tab.Screen
        name="Budgets"
        component={Budgets}
        options={{
          tabBarIcon: ({ focused }) =>
            getTabBarIcon("Budgets", 20, focused ? "#64CCC5" : "#176B87"),
        }}
      />
      <Tab.Screen
        name="Category"
        component={Category}
        options={{
          tabBarIcon: ({ focused }) =>
            getTabBarIcon("Category", 20, focused ? "#64CCC5" : "#176B87"),
        }}
      />
      <Tab.Screen
        name="Goals"
        component={Goals}
        options={{
          tabBarIcon: ({ focused }) =>
            getTabBarIcon("Goals", 20, focused ? "#64CCC5" : "#176B87"),
        }}
      />
    </Tab.Navigator>
  );
};

export default TabBar;
