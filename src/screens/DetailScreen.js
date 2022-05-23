import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";
import { detailMovie, trailerMovie } from "../api/imdb";

import YoutubePlayer from "react-native-youtube-iframe";
import { ScrollView } from "react-native-gesture-handler";

export default function DetailScreen(props) {
  const { navigation, route } = props;
  const { id } = route.params;

  const [movieItem, setMovieItem] = React.useState(null);
  const [trailerItem, setTrailerItem] = React.useState(null);

  React.useEffect(() => {
    (async () => {
      loadDetailMovie();
    })();
  }, []);

  const loadDetailMovie = async () => {
    try {
      const data = await detailMovie(id);
      const trailer = await trailerMovie(id);
      setMovieItem(data);
      setTrailerItem(trailer);
    } catch (error) {
      console.error(error);
    }
  };

  if (movieItem && trailerItem) {
    return (
      <ScrollView>
        <View>
          <Image style={styles.image} source={{ uri: movieItem.image }} />
          <View style={styles.continerTitleBK}></View>
          <View style={styles.continerTitle}>
            <Text style={styles.title}>{movieItem.title}</Text>
            <Text style={styles.info}>{movieItem.genres}</Text>
            <Text style={styles.info}>{movieItem.year}</Text>
          </View>
        </View>
        <Text style={styles.plotLocal}>{movieItem.plotLocal}</Text>

        <View>
          <YoutubePlayer
            height={300}
            play={true}
            videoId={trailerItem.videoId}
          />
        </View>
      </ScrollView>
    );
  } else {
    return (
      <View>
        <Text>no </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  image: {
    bottom: 0,
    top: 0,
    height: 300,
    width: "auto",
    resizeMode: "center",
    margin: 0,
    padding: 0,
  },
  continerTitleBK: {
    backgroundColor: "gray",
    opacity: 0.2,
    height: 90,
    position: "absolute",
    bottom: 0,
    right: 0,
    left: 0,
  },
  continerTitle: {
    padding: 20,
    position: "absolute",
    bottom: 0,
    right: 0,
    left: 0,
  },
  title: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },
  info: {
    color: "white",
  },
  plotLocal: {
    padding: 20,
    textAlign: "justify",
    color: "white",
  },
});
