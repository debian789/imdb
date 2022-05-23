import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";

export default function MessageNotFound() {
  return (
    <View style={styles.container}>
      <Text style={styles.message}>Pelicula no encontrada</Text>
      <Image
        source={require("../assets/images/error.png")}
        style={styles.image}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "relative",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    justifyContent: "center",
    padding: 40,
  },
  message: {
    textAlign: "center",
    fontSize: 30,
    color: "#ccc",
  },
  image: {
    bottom: 0,
    height: 300,
    width: "auto",
    resizeMode: "stretch",
    margin: 0,
    padding: 0,
  },
});
