import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableWithoutFeedback,
} from "react-native";
import React from "react";

export default function CardMovie(props) {
  const { movie, navigation } = props;

  const goDetail = () => {
    navigation.navigate("Detail", { id: movie.id });
  };

  return (
    <TouchableWithoutFeedback onPress={goDetail}>
      <View style={styles.containerCard}>
        <Image style={styles.image} source={{ uri: movie.image }} />
        <Text numberOfLines={1} ellipsizeMode="head" style={styles.title}>
          {movie.title}
        </Text>
      </View>
    </TouchableWithoutFeedback>
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
  title: {
    backgroundColor: "black",
    position: "absolute",
    color: "white",
    bottom: 0,
    width: "auto",
    flex: 1,
    left: 0,
    right: 0,
    height: 30,
    paddingTop: 5,
    textAlign: "center",
  },

  image: {
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
