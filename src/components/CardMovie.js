import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableWithoutFeedback,
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

/**
 * Componente para visualizar portada de peliculas
 * @param {*} props
 * @returns
 */
export default function CardMovie(props) {
  const { movie } = props;
  const navigation = useNavigation();

  /**
   * Metodo para navegar a la interfaz de Detail
   */
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
    height: 60,
    paddingTop: 10,
    textAlign: "center",
    fontSize: 20,
  },

  image: {
    bottom: 0,
    top: 0,
    flex: 1,
    height: 500,
    width: "auto",
    resizeMode: "stretch",
    margin: 0,
    padding: 0,
  },
});
