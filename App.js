import React, { useEffect } from "react";
import { View, StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Tabs from "./src/navigation/tabs";

const Stack = createNativeStackNavigator();

const MainTabs = () => {
  useEffect(() => {
    const isDarkBackground = false;
    const statusBarStyle = {
      translucent: false,
      animated: true,
      hidden: false,
      backgroundColor: isDarkBackground ? "black" : "white",
      barStyle: isDarkBackground ? "light-content" : "dark-content",
    };
    StatusBar.setBarStyle(statusBarStyle.barStyle);
    StatusBar.setBackgroundColor(statusBarStyle.backgroundColor);
  }, []);

  return (
    <View style={{ flex: 1, backgroundColor: "#001C30" }}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{ headerShown: false }}
          initialRouteName="Home"
        >
          <Stack.Screen name="Home" component={Tabs} />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
};

export default MainTabs;
