import { SafeAreaView, TextInput, StyleSheet } from "react-native";
import React from "react";
import { searchMovie } from "../api/imdb";
import MovieList from "../components/MovieList";

export default function HomeScreen() {
  const [movieSearch, setMovieSearch] = React.useState();
  const [resultMovie, setResultMovie] = React.useState(null);

  React.useEffect(() => {
    (async () => {
      await loadMovies();
    })();
  }, [movieSearch]);

  const loadMovies = async () => {
    try {
      if (movieSearch && movieSearch.length > 3) {
        const data = await searchMovie(movieSearch);
        setResultMovie(data.results);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <SafeAreaView>
      <TextInput
        style={styles.inputSearch}
        onChangeText={setMovieSearch}
        placeholder="Search movie..."
        placeholderTextColor="gray"
      />
      <MovieList movies={resultMovie} loadMovies={loadMovies} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  inputSearch: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
    borderColor: "#ccc",
    color: "white",
  },
});
