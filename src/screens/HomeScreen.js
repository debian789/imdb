import { SafeAreaView, View, StyleSheet } from "react-native";
import React from "react";
import { SearchBar } from "react-native-elements";
import { searchMovie } from "../api/imdb";
import MovieList from "../components/MovieList";
import {
  getSearchStorage,
  saveSearchStorage,
} from "../storage/movieSearchStorage";

/**
 * Screen para visualizar la vista principal de busqueda
 * @param {*} props
 * @returns
 */
export default function HomeScreen(props) {
  const pagination = 3;
  const [movieSearch, setMovieSearch] = React.useState();
  const [indexItem, setIndexItem] = React.useState(0);
  const [positionItem, setPositionItem] = React.useState(0);
  const [dataPaginate, setDataPaginate] = React.useState([]);
  const [isNewData, setIsNewData] = React.useState(false);
  const [notFound, setNotFound] = React.useState(false);

  React.useEffect(() => {
    (async () => {
      resetSearch();
      await loadMovies();
      if (!movieSearch) {
        setIsNewData(false);
      }
    })();
  }, [movieSearch]);

  /**
   * Metodo para inicializar los datos
   */
  const resetSearch = () => {
    setIndexItem(0);
    setPositionItem(0);
    setDataPaginate([]);
    saveSearchStorage([]);
  };

  /**
   * Permite cargar la informacion guardada en localStorage
   * @param {*} indexInput
   * @param {*} positionInput
   * @param {*} oldData
   */
  const loadPaginationData = async (indexInput, positionInput, oldData) => {
    data = await getSearchStorage();
    let index = indexInput;
    let position = positionInput;
    const paginate = [];
    if (data && data.length >= index) {
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

  /**
   * Permite cargar los datos  de peliculas desdel el API
   */
  const loadMovies = async () => {
    try {
      if (movieSearch && movieSearch.length > 3) {
        const dataServer = await searchMovie(movieSearch);
        resetSearch();
        if (dataServer && dataServer.results) {
          saveSearchStorage(dataServer.results);
          setNotFound(false);
        } else {
          setNotFound(true);
        }
        loadPaginationData(0, 0, []);
        setIsNewData(true);
      } else {
        setNotFound(false);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <SafeAreaView style={styles.containerItem}>
      <View>
        <SearchBar
          style={styles.inputSearch}
          placeholder="Buscar pelicula..."
          onChangeText={setMovieSearch}
          value={movieSearch}
        />
        <MovieList
          isNewData={isNewData}
          movies={dataPaginate}
          loadMovies={loadPaginationData}
          indexInput={indexItem}
          positionInput={positionItem}
          notFound={notFound}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  containerItem: {
    flex: 1,
    bottom: 0,
    right: 0,
    top: 0,
    left: 0,
    borderWidth: 2,
    marginTop: 40,
  },
  inputSearch: {
    height: 40,
    margin: 12,
    padding: 10,
    borderRadius: 10,
    color: "white",
    padding: 0,
    margin: 0,
  },
});
