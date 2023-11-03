import { StyleSheet } from "react-native";
import { StatusBar } from "react-native";

export const baseLayout = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
  },
  text: {
    fontSize: 24,
    color: "white",
    textAlign: "center",
  },
  darkContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#000000",
  },
  darkText: {
    fontSize: 24,
    color: "white",
    textAlign: "center",
  },
});
