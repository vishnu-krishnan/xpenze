import { StyleSheet } from "react-native";

export const cardStyles = (width, height) => {
  return StyleSheet.create({
    card: {
      width,
      height,
      borderRadius: 10,
      backgroundColor: "#fff",
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5,
      margin: 10,
      justifyContent: "center",
      alignItems: "center",
    },
    cardTitle: {
      fontSize: 20,
      fontWeight: "bold",
    },
    cardDescription: {
      fontSize: 16,
      color: "#888",
    },
  });
};
