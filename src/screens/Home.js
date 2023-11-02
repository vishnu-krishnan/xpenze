import React from "react";
import { ScrollView, View, Text, TouchableOpacity } from "react-native";
import { Appearance } from "react-native";

import { baseLayout } from "../styles/ScreenStyles";
import { cardStyles } from "../styles/CardStyles";
import { headerStyles, titleStyles } from "../styles/HeaderStyles";

const Home = ({ navigation }) => {
  const customCardStyles = cardStyles(370, 120);

  const colorScheme = Appearance.getColorScheme();

  const styles =
    colorScheme === "dark" ? baseLayout.darkContainer : baseLayout.container;
  const textStyles =
    colorScheme === "dark" ? baseLayout.darkText : baseLayout.text;

  console.log("Home page loaded");

  const cards = [
    {
      title: "Total Expense",
      description: "This is the first card.",
    },
    {
      title: "Card 2",
      description: "This is the second card.",
    },
    {
      title: "Card 3",
      description: "This is the third card.",
    },
  ];

  return (
    <ScrollView>
      <View style={styles}>
        <View style={titleStyles.titleContainer}>
          <Text style={titleStyles.titleText}>Home!</Text>
        </View>

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

export default Home;
