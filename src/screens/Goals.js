import React from "react";
import {
  ScrollView,
  View,
  Text,
  KeyboardAvoidingView,
  Platform,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { goalsTabStyles } from "../styles/GoalsLayout";
import GoalsList from "./GoalsList";

export default function Goals() {
  console.log("Goals page loaded");

  return (
    <ScrollView style={goalsTabStyles.container}>
      <View style={goalsTabStyles.tasksWrapper}>
        <Text style={goalsTabStyles.sectionTitles}>Goals!</Text>

        <View style={goalsTabStyles.body}>
          <GoalsList text={"Car"} />
          <GoalsList text={"Phone"} />
        </View>
      </View>

      <KeyboardAvoidingView
        behavior={Platform.OS === "android" ? "padding" : "height"}
        style={goalsTabStyles.writeTaskWrapper}
      >
        <TextInput style={goalsTabStyles.input} placeholder="Write the goal" />
        <TouchableOpacity>
          <View style={goalsTabStyles.addWrapper}>
            <Text style={goalsTabStyles.addText}>+</Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </ScrollView>
  );
}
