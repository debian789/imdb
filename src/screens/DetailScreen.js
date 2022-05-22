import { View, Text } from "react-native";
import React from "react";
import { detailMovie } from "../api/imdb";

export default function DetailScreen(props) {
  const { navigation, route } = props;
  const { id } = route.params;

  const [movieItem, setMovieItem] = React.useState(null);

  React.useEffect(() => {
    (async () => {
      console.log("lllegue aqui ?");
      loadDetailMovie();
    })();
  }, []);

  const loadDetailMovie = async () => {
    try {
      console.log("ajsdfafsafa");
      const data = await detailMovie(id);
      console.log(data);
      setMovieItem(data);
    } catch (error) {
      console.log(error);
    }
  };

  console.log(movieItem);

  if (movieItem) {
    return (
      <View>
        <Text>{movieItem.title}</Text>
        <Text>{movieItem.genres}</Text>
        <Text>{movieItem.year}</Text>
        <Text>{movieItem.plotLocal}</Text>
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
