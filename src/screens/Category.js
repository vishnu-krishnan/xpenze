import React from "react";
import { ScrollView, View, Text, Appearance } from "react-native";
import { baseLayout } from "../styles/ScreenStyles";
import { cardStyles } from "../styles/CardStyles";

const Category = () => {
  const customCardStyles = cardStyles(370, 100);

  const colorScheme = Appearance.getColorScheme();

  const styles =
    colorScheme === "dark" ? baseLayout.darkContainer : baseLayout.container;
  const textStyles =
    colorScheme === "dark" ? baseLayout.darkText : baseLayout.text;

  const cards = [
    {
      title: "Flipkart",
      description: "4000",
    },
    {
      title: "Loan",
      description: "15500",
    },
    {
      title: "Chitti",
      description: "5000",
    },
    {
      title: "Amazon",
      description: "5000",
    },
    {
      title: "Food",
      description: "7500",
    },
    {
      title: "Others",
      description: "2300",
    },
  ];

  return (
    <ScrollView>
      <View>
        <Text>Category!</Text>
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

export default Category;
