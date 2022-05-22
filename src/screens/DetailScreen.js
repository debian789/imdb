import { View, Text } from "react-native";
import React from "react";
import { detailMovie, trailerMovie } from "../api/imdb";

import YoutubePlayer from "react-native-youtube-iframe";

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
      console.log(error);
    }
  };

  if (movieItem && trailerItem) {
    return (
      <View>
        <Text>{movieItem.title}</Text>
        <Text>{movieItem.genres}</Text>
        <Text>{movieItem.year}</Text>
        <Text>{movieItem.plotLocal}</Text>
        <View>
          <YoutubePlayer
            height={300}
            play={true}
            videoId={trailerItem.videoId}
          />
        </View>
      </View>
    );
  } else {
    return (
      <View>
        <Text>no </Text>
      </View>
    );
  }
}
