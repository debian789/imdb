import { SafeAreaView, TextInput, StyleSheet } from "react-native";
import React from "react";
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
    // console.log("disque cargo la data " + data.length);
    // let index = indexItem;
    // let position = positionItem;
    // console.log(`indice: ${index} - position ${position}`);
    //console.log(`dato validacion: ${data.length >= index}`);
    if (data.length >= index) {
      for (var i = 1; pagination >= i; i++) {
        if (data.length > position) {
          paginate.push(data[position]);
        }
        position = index + i;
      }
      //console.log("se ejecuta esto ??? ");
    }

    console.log(`1) Informaciòn data ${data.length}`);
    console.log(`2) Informaciòn index ${indexInput}`);
    console.log(`3) Informaciòn positionInput ${positionInput}`);
    console.log(`4) Informaciòn oldData ${oldData.length}`);
    console.log(`5) Informacion paginate  ${paginate.length}`);
    // setDataPaginate([...oldData, ...paginate]);
    setIndexItem(index + pagination);
    setPositionItem(position);

    setDataPaginate([...oldData, ...paginate]);
    //return [...oldData, ...paginate];
  };

  const loadMovies = async () => {
    try {
      //console.log(`2) indice: ${indexItem} - position ${positionItem}`);
      if (movieSearch && movieSearch.length > 3) {
        const dataServer = await searchMovie(movieSearch);
        resetSearch();
        saveSearchStorage(dataServer.results);
        /*
        console.log("estoy aqui");
        console.log(dataServer.results.length);
        console.log(dataPaginate.length);*/
        // setDataPaginate(await loadPaginationData(0, 0, []));
        loadPaginationData(0, 0, []);
        setIsNewData(true);
      }
    } catch (error) {
      // saveSearchStorage([]);
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
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
    // borderColor: "#ccc",
    color: "white",
    backgroundColor: "gray",
  },
});
