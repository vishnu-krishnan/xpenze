import React from "react";
import { View, Text } from "react-native";
import { Appearance } from "react-native";
import { baseLayout } from "../styles/ScreenStyles";

const Goals = () => {
  const colorScheme = Appearance.getColorScheme();

  const styles =
    colorScheme === "dark" ? baseLayout.darkContainer : baseLayout.container;
  const textStyles =
    colorScheme === "dark" ? baseLayout.darkText : baseLayout.text;

  console.log("Goals page loaded");
  return (
    <View style={styles}>
      <Text style={textStyles}>Goals!</Text>
    </View>
  );
};

export default Goals;
