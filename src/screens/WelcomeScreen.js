import React from "react";
import { View, Text } from "react-native";
import { Appearance } from "react-native";
import { baseLayout } from "../styles/ScreenStyles";

const WelcomScreen = () => {
  const colorScheme = Appearance.getColorScheme();

  const styles =
    colorScheme === "dark" ? baseLayout.darkContainer : baseLayout.container;
  const textStyles =
    colorScheme === "dark" ? baseLayout.darkText : baseLayout.text;

  console.log("Welcome page loaded");
  return (
    <View style={styles}>
      <Text style={textStyles}>WelcomScreen!</Text>
    </View>
  );
};

export default WelcomScreen;
