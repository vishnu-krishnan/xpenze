import React from "react";
import { View, Text } from "react-native";
import { Appearance } from "react-native";
import { baseLayout } from "../styles/ScreenStyles";

const CreditUtilisation = () => {
  const colorScheme = Appearance.getColorScheme();

  const styles =
    colorScheme === "dark" ? baseLayout.darkContainer : baseLayout.container;
  const textStyles =
    colorScheme === "dark" ? baseLayout.darkText : baseLayout.text;

  console.log("Credit Util page loaded");
  return (
    <View style={styles}>
      <Text style={textStyles}>CreditUtilisation!</Text>
    </View>
  );
};

export default CreditUtilisation;
