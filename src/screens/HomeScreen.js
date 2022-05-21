import { SafeAreaView, TextInput, StyleSheet } from "react-native";
import React from "react";
import { searchMovie } from "../api/imdb";
import MovieList from "../components/MovieList";

export default function HomeScreen(props) {
  const [movieSearch, setMovieSearch] = React.useState();
  const [resultMovie, setResultMovie] = React.useState(null);
  //console.log(props);
  const { navigation } = props;

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
        placeholderTextColor="#ccc"
        defaultValue="hola"
      />
      <MovieList
        movies={resultMovie}
        loadMovies={loadMovies}
        navigation={navigation}
      />
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
    // borderColor: "#ccc",
    color: "white",
    backgroundColor: "gray",
  },
});
