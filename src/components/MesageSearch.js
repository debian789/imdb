import { View, Image, Text, StyleSheet } from "react-native";
import React from "react";

/**
 * Componente para mostrar el mensaje de buscar peliculas
 * @returns
 */
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
