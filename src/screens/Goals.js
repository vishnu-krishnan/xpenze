import React from "react";
import { ScrollView, View, Text } from "react-native";
import { Appearance } from "react-native";
import { baseLayout } from "../styles/ScreenStyles";
import { cardStyles } from "../styles/CardStyles";

const Goals = () => {
  const customCardStyles = cardStyles(370, 100);

  const colorScheme = Appearance.getColorScheme();

  const styles =
    colorScheme === "dark" ? baseLayout.darkContainer : baseLayout.container;
  const textStyles =
    colorScheme === "dark" ? baseLayout.darkText : baseLayout.text;

  console.log("Goals page loaded");

  const cards = [
    {
      title: "Car",
      description: "10 Lakhs",
    },
    {
      title: "Mobile",
      description: "50 K",
    },
  ];
  return (
    <ScrollView>
      <View style={styles}>
        <Text style={textStyles}>Goals!</Text>
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

export default Goals;
