import {
  FlatList,
  StyleSheet,
  ActivityIndicator,
  Platform,
} from "react-native";
import React from "react";
import CardMovie from "./CardMovie";
import MesageSearch from "./MesageSearch";
import MessageNotFound from "./MessageNotFound";

export default function MovieList(props) {
  const { movies, loadMovies, indexInput, positionInput, isNewData, notFound } =
    props;

  const loadMoreMovie = () => {
    loadMovies(indexInput, positionInput, movies);
  };

  if (isNewData && movies && movies.length) {
    return (
      movies && (
        <FlatList
          data={movies}
          numColumns={1}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.flatListContentContainer}
          keyExtractor={(movie) => movie.id}
          renderItem={({ item }) => <CardMovie movie={item} />}
          onEndReached={loadMoreMovie}
          onEndReachedThreshold={0.1}
          ListFooterComponent={() => {
            return (
              isNewData &&
              movies && (
                <ActivityIndicator
                  size="large"
                  style={styles.spinner}
                  color="#AEAEAE"
                />
              )
            );
          }}
        />
      )
    );
  } else if (notFound) {
    return <MessageNotFound />;
  } else {
    return <MesageSearch />;
  }
}

const styles = StyleSheet.create({
  flatListContentContainer: {
    backgroundColor: "black",
    borderWidth: 1,
    marginTop: Platform.OS === "android" ? 60 : 0,
  },
  spinner: {
    marginTop: 20,
    marginBottom: 60,
  },
});
