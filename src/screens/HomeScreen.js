import { SafeAreaView, TextInput, View, StyleSheet } from "react-native";
import React from "react";
import { SearchBar } from "react-native-elements";
import { searchMovie } from "../api/imdb";
import MovieList from "../components/MovieList";
import {
  getSearchStorage,
  saveSearchStorage,
} from "../storage/movieSearchStorage";

export default function HomeScreen(props) {
  const pagination = 12;
  const [movieSearch, setMovieSearch] = React.useState();
  const [indexItem, setIndexItem] = React.useState(0);
  const [positionItem, setPositionItem] = React.useState(0);
  const [dataPaginate, setDataPaginate] = React.useState([]);
  const [isNewData, setIsNewData] = React.useState(false);

  const { navigation } = props;

  React.useEffect(() => {
    (async () => {
      resetSearch();
      await loadMovies();
    })();
  }, [movieSearch]);

  const resetSearch = () => {
    setIndexItem(0);
    setPositionItem(0);
    setDataPaginate([]);
    saveSearchStorage([]);
  };

  const loadPaginationData = async (indexInput, positionInput, oldData) => {
    data = await getSearchStorage();
    let index = indexInput;
    let position = positionInput;
    const paginate = [];
    if (data.length >= index) {
      for (var i = 1; pagination >= i; i++) {
        if (data.length > position) {
          paginate.push(data[position]);
        }
        position = index + i;
      }
    }
    setIndexItem(index + pagination);
    setPositionItem(position);
    setDataPaginate([...oldData, ...paginate]);
  };

  const loadMovies = async () => {
    try {
      if (movieSearch && movieSearch.length > 3) {
        const dataServer = await searchMovie(movieSearch);
        resetSearch();
        saveSearchStorage(dataServer.results);
        loadPaginationData(0, 0, []);
        setIsNewData(true);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <SafeAreaView>
      <SearchBar
        style={styles.inputSearch}
        placeholder="Search movie..."
        onChangeText={setMovieSearch}
        value={movieSearch}
      />
      <MovieList
        isNewData={isNewData}
        movies={dataPaginate}
        loadMovies={loadPaginationData}
        navigation={navigation}
        indexInput={indexItem}
        positionInput={positionItem}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  inputSearch: {
    height: 40,
    margin: 12,
    //borderWidth: 1,
    padding: 10,
    borderRadius: 10,
    // backgroundColor: "red",
    color: "white",
    // backgroundColor: "gray",
    padding: 0,
    margin: 0,
  },
});
