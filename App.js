import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
// import { Home, Budgets, Category, Goals } from "./src/screens";
import Home from "./src/screens/Home";
import Budgets from "./src/screens/Budgets";
import Category from "./src/screens/Category";
import Goals from "./src/screens/Goals";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { MaterialCommunityIcons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

const screenOptions = {
  tabBarShowLabel: false,
  headerShown: false,
  tabBarStyle: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    elevation: 0,
    height: 60,
    backgroundColor: "#fff",
  },
};

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={screenOptions}>
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarIcon: ({ focused }) => {
              return (
                <View
                  style={{ alignItems: "center", justifyContent: "center" }}
                >
                  <MaterialCommunityIcons
                    name="home-assistant"
                    size={24}
                    color={focused ? "#16247d" : "#111"}
                  />
                  <Text style={{ fontSize: 12, color: "#16247d" }}>Home</Text>
                </View>
              );
            },
          }}
        />

        <Tab.Screen
          name="Budgets"
          component={Budgets}
          options={{
            tabBarIcon: ({ focused }) => {
              return (
                <View
                  style={{ alignItems: "center", justifyContent: "center" }}
                >
                  <FontAwesome5
                    name="money-check-alt"
                    size={24}
                    color={focused ? "#16247d" : "#111"}
                  />
                  <Text style={{ fontSize: 12, color: "#16247d" }}>
                    Budgets
                  </Text>
                </View>
              );
            },
          }}
        />
        <Tab.Screen
          name="Category"
          component={Category}
          options={{
            tabBarIcon: ({ focused }) => {
              return (
                <View
                  style={{ alignItems: "center", justifyContent: "center" }}
                >
                  <MaterialIcons
                    name="category"
                    size={24}
                    color={focused ? "#16247d" : "#111"}
                  />
                  <Text style={{ fontSize: 12, color: "#16247d" }}>
                    Category
                  </Text>
                </View>
              );
            },
          }}
        />
        <Tab.Screen
          name="Goals"
          component={Goals}
          options={{
            tabBarIcon: ({ focused }) => {
              return (
                <View
                  style={{ alignItems: "center", justifyContent: "center" }}
                >
                  <MaterialCommunityIcons
                    name="target"
                    size={24}
                    color={focused ? "#16247d" : "#111"}
                  />
                  <Text style={{ fontSize: 12, color: "#16247d" }}>Goals</Text>
                </View>
              );
            },
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
