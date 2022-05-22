import { SafeAreaView, TextInput, StyleSheet } from "react-native";
import React from "react";
import { searchMovie } from "../api/imdb";
import MovieList from "../components/MovieList";
import { set } from "react-native-reanimated";

export default function HomeScreen(props) {
  const pagination = 3;
  const [movieSearch, setMovieSearch] = React.useState();
  const [resultMovie, setResultMovie] = React.useState(null);
  const [indexItem, setIndexItem] = React.useState(0);
  const [positionItem, setPositionItem] = React.useState(0);
  const [dataPaginate, setDataPaginate] = React.useState([]);

  const { navigation } = props;

  React.useEffect(() => {
    (async () => {
      await loadMovies();
      loadMovieByCache();
      console.log("solo deberia ejecutar cuando se realiza un busqeuda");
    })();
  }, [movieSearch]);

  const paginationData = (data) => {
    console.log("consultar info paginada");
    let index = indexItem;
    let position = positionItem;
    const paginate = [];
    if (data.length >= index) {
      for (var i = 1; pagination >= i; i++) {
        paginate.push(data[position]);
        position = index + i;
      }

      setIndexItem(index + pagination);
      setPositionItem(position);
      setDataPaginate([...dataPaginate, ...paginate]);
    }
    return [...dataPaginate, ...paginate];
  };

  const loadMovieByCache = () => {
    // const a = resultMovie;

    // debugger;

    return paginationData(resultMovie);
  };

  const loadMovies = async () => {
    try {
      if (movieSearch && movieSearch.length > 3) {
        console.log("esto se ejeucta");
        const dataServer = await searchMovie(movieSearch);
        setResultMovie(dataServer.results);
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
        movies={dataPaginate}
        loadMovies={loadMovieByCache}
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
