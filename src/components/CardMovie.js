import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";

export default function CardMovie(props) {
  const { movie } = props;
  //console.log(movie);
  return (
    <View style={styles.containerCard}>
      <Image style={styles.image} source={{ uri: movie.image }} />
    </View>
  );
}

const styles = StyleSheet.create({
  containerCard: {
    flex: 1,
    bottom: 0,
    top: 0,
    margin: 0,
    padding: 0,
    paddingHorizontal: 0,
    paddingBottom: 0,
    borderColor: "blue",
    borderWidth: 1,
  },
  image: {
    //position: "absolute",
    bottom: 0,
    top: 0,
    flex: 1,
    height: 200,
    width: "auto",
    resizeMode: "stretch",
    margin: 0,
    padding: 0,
  },
});
