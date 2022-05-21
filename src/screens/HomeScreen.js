import { View, Text, SafeAreaView, TextInput } from "react-native";
import React from "react";
import { searchMovie } from "../api/imdb";
import MovieList from "../components/MovieList";

export default function HomeScreen() {
  const [movieSearch, setMovieSearch] = React.useState("");
  const [resultMovie, setResultMovie] = React.useState(null);

  React.useEffect(() => {
    (async () => {
      await loadMovies();
    })();
  }, [movieSearch]);

  const loadMovies = async () => {
    setResult(await searchMovie(movieSearch));
  };

  return (
    <SafeAreaView>
      <Text>HomeScreen</Text>
      <TextInput onChangeText={setMoveSearch} />
      <MovieList movies={resultMovie} loadMovies={loadMovies} />
    </SafeAreaView>
  );
}
