import React from "react";
import { ScrollView, View, Text } from "react-native";
import { Appearance } from "react-native";

import { appStyles } from "../styles/AppBaseLayout";
import { cardStyles } from "../styles/CardStyles";
import { titleStyles } from "../styles/HeaderStyles";

const Budgets = ({ navigation }) => {
  const customCardStyles = cardStyles(370, 120);

  const colorScheme = Appearance.getColorScheme();

  const styles =
    colorScheme === "dark" ? appStyles.container : appStyles.container;

  const textStyles =
    colorScheme === "dark" ? appStyles.darkText : appStyles.text;

  const cards = [
    {
      title: "OCTOBER",
      budget: "35,000",
    },
  ];
  console.log("Budgets page loaded");

  return (
    <ScrollView
      contentContainerStyle={customCardStyles.container}
      style={styles}
    >
      <View style={titleStyles.titleContainer}>
        <Text style={titleStyles.titleText}>Budgets!</Text>
      </View>

      {cards.map((card, index) => (
        <View key={index} style={customCardStyles.card}>
          <Text style={customCardStyles.cardTitle}>{card.title}</Text>
          <Text style={customCardStyles.cardDescription}>{card.budget}</Text>
        </View>
      ))}
    </ScrollView>
  );
};

export default Budgets;
