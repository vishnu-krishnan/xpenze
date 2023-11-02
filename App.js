import React from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { appStyles } from "./src/styles/AppBaseLayout";
import { Ionicons } from "@expo/vector-icons";

import Home from "./src/screens/Home";
import Budgets from "./src/screens/Budgets";
import Category from "./src/screens/Category";
import Goals from "./src/screens/Goals";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const screenOptions = {
  tabBarShowLabel: false,
  headerShown: false,
  tabBarStyle: appStyles.tabBar,
};

const MainTabs = () => {
  return (
    <Tab.Navigator screenOptions={screenOptions}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={appStyles.tabBarIconContainer}>
              <Ionicons
                name="home"
                size={20}
                color={focused ? "#044a31" : "#12cc8b"}
              />
              <Text style={appStyles.tabBarIconText}>Home</Text>
            </View>
          ),
        }}
      />

      <Tab.Screen
        name="Budgets"
        component={Budgets}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={appStyles.tabBarIconContainer}>
              <MaterialCommunityIcons
                name="finance"
                size={20}
                color={focused ? "#044a31" : "#12cc8b"}
              />
              <Text style={appStyles.tabBarIconText}>Budgets</Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Category"
        component={Category}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={appStyles.tabBarIconContainer}>
              <FontAwesome
                name="list-alt"
                size={20}
                color={focused ? "#044a31" : "#12cc8b"}
              />
              <Text style={appStyles.tabBarIconText}>Category</Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Goals"
        component={Goals}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={appStyles.tabBarIconContainer}>
              <Ionicons
                name="ios-hourglass-outline"
                size={20}
                color={focused ? "#044a31" : "#12cc8b"}
              />
              <Text style={appStyles.tabBarIconText}>Goals</Text>
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Main"
          component={MainTabs}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
