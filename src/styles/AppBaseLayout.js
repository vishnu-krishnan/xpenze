import { StyleSheet } from "react-native";

export const appStyles = StyleSheet.create({
  tabBar: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    elevation: 0,
    height: 60,
    backgroundColor: "#fff",
  },
  tabBarIconContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
  tabBarIconText: {
    fontSize: 12,
    color: "#044a31",
  },
});
