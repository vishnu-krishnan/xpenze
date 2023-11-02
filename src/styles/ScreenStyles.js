import { StyleSheet } from "react-native";

export const baseLayout = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white", 
  },
  text: {
    fontSize: 24,
    color: "black", 
    textAlign: "center",
  },
  darkContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "black", 
  },
  darkText: {
    fontSize: 24,
    color: "white", 
    textAlign: "center",
  },
});
