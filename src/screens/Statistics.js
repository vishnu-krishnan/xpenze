import React from "react";
import { View, Text } from "react-native";
import { Appearance } from "react-native";
import { baseLayout } from "../styles/ScreenStyles";

const Statistics = () => {
  const colorScheme = Appearance.getColorScheme();

  const styles =
    colorScheme === "dark" ? baseLayout.darkContainer : baseLayout.container;
  const textStyles =
    colorScheme === "dark" ? baseLayout.darkText : baseLayout.text;

  console.log("Statistics page loaded");
  return (
    <View style={styles}>
      <Text style={textStyles}>Statistics!</Text>
    </View>
  );
};

export default Statistics;
