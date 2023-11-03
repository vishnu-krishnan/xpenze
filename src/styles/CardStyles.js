import { StyleSheet } from "react-native";

export const cardStyles = (width, height) => {
  return StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#FDFDFD",
      justifyContent: "center",
      alignItems: "center",
    },
    card: {
      width,
      height,
      borderRadius: 25,
      backgroundColor: "#176B87",
      shadowColor: "black",
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5,
      marginTop: 20,
      justifyContent: "center",
      alignItems: "center",
    },
    cardTitle: {
      fontSize: 18,
      fontWeight: "bold",
      color: "white",
      textAlign: "left",
    },
    cardDescription: {
      fontSize: 40,
      color: "#EF7028",
    },
    cardDiffRate: {
      fontSize: 16,
      color: "#60C0C3",
    },
  });
};
