import React, { useEffect } from "react";
import { ScrollView, View, Text } from "react-native";
import { Appearance } from "react-native";

import { appStyles } from "../styles/AppBaseLayout";
import { cardStyles } from "../styles/CardStyles";
import { titleStyles } from "../styles/HeaderStyles";

const Home = ({ navigation }) => {
  const customCardStyles = cardStyles(370, 120);

  const colorScheme = Appearance.getColorScheme();

  const styles =
    colorScheme === "dark" ? appStyles.container : appStyles.container;

  const textStyles =
    colorScheme === "dark" ? appStyles.darkText : appStyles.text;

  const cards = [
    {
      title: "OCTOBER'23",
      expense: "37,000",
      diffRate: "(-30%)",
    },
  ];
  console.log("Home page loaded");

  return (
    <ScrollView style={customCardStyles.container}>
      <View style={styles}>
        <View style={titleStyles.titleContainer}>
          <Text style={titleStyles.titleText}>EXPENZE</Text>
        </View>

        {cards.map((card, index) => (
          <View key={index} style={customCardStyles.card}>
            <Text style={customCardStyles.cardTitle}>{card.title}</Text>
            <Text style={customCardStyles.cardDescription}>{card.expense}</Text>
            <Text style={customCardStyles.cardDiffRate}>{card.diffRate}</Text>
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

export default Home;
