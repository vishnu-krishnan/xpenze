import React from "react";
import { ScrollView, View, Text } from "react-native";
import { Appearance } from "react-native";
import { baseLayout } from "../styles/ScreenStyles";
import { cardStyles } from "../styles/CardStyles";

const Budgets = () => {
  const customCardStyles = cardStyles(370, 100);

  const colorScheme = Appearance.getColorScheme();

  const styles =
    colorScheme === "dark" ? baseLayout.darkContainer : baseLayout.container;
  const textStyles =
    colorScheme === "dark" ? baseLayout.darkText : baseLayout.text;

  console.log("Budgets page loaded");

  const cards = [
    {
      title: "Monthly Budget",
      description: "35000",
    },
  ];
  return (
    <ScrollView>
      <View style={styles}>
        <Text style={textStyles}>Budgets!</Text>
        {cards.map((card, index) => (
          <View key={index} style={customCardStyles.card}>
            <Text style={customCardStyles.cardTitle}>{card.title}</Text>
            <Text style={customCardStyles.cardDescription}>
              {card.description}
            </Text>
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

export default Budgets;
