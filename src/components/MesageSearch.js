import { View, Image, Text, StyleSheet, ActivityIndicator } from "react-native";
import React from "react";

export default function MesageSearch() {
  return (
    <View style={styles.container}>
      <Text style={styles.message}>Busca tus peliculas favoritas</Text>
      <Image
        source={require("../assets/images/load.png")}
        style={styles.image}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    //backgroundColor: "red",
    //flex: 1,
    position: "relative",
    //position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    justifyContent: "center",
    //alignItems: "center",
    //height: "auto",
    padding: 40,
  },
  message: {
    textAlign: "center",
    fontSize: 30,
    color: "#ccc",
  },
  image: {
    bottom: 0,
    //top: 0,
    //flex: 1,
    height: 300,
    width: "auto",
    resizeMode: "stretch",
    margin: 0,
    padding: 0,
    //position: "absolute",
  },
});
