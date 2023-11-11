import React from "react";
import { View, Text } from "react-native";
import { goalsTabStyles } from "../styles/GoalsLayout";

const GoalsList = (props) => {
  return (
    <View style={goalsTabStyles.item}>
      <View style={goalsTabStyles.itemLeft}>
        <Text style={goalsTabStyles.itemText}>{props.text}</Text>
      </View>
      <View style={goalsTabStyles.circular} />
    </View>
  );
};

export default GoalsList;
