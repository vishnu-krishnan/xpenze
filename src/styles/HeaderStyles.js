import { StyleSheet } from "react-native";

export const headerStyles = StyleSheet.create({
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  iconContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  icon: {
    padding: 20,
  },
  title: {
    fontSize: 20,
  },
});

export const titleStyles = StyleSheet.create({
  titleContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 50,
  },
  titleText: {
    fontSize: 34,
  },
});
