import {
  View,
  Text,
  FlatList,
  StyleSheet,
  ActivityIndicator,
} from "react-native";
import React from "react";
import CardMovie from "./CardMovie";

export default function MovieList(props) {
  const { movies, loadMovies } = props;

  return (
    <FlatList
      data={movies}
      numColumns={3}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={styles.flatListContentContainer}
      keyExtractor={(movie) => movie.id}
      renderItem={({ item }) => <CardMovie movie={item} />}
      onEndReached={loadMovies}
      onEndReachedThreshold={0.1}
      ListFooterComponent={
        <ActivityIndicator
          size="large"
          style={styles.spinner}
          color="#AEAEAE"
        />
      }
    />
  );
}

const styles = StyleSheet.create({
  flatListContentContainer: {
    backgroundColor: "white",
    borderRadius: 10,
    padding: 0,
    margin: 0,
    paddingBottom: 0,
    paddingHorizontal: 0,
    paddingEnd: 0,
    paddingStart: 0,
    marginBottom: 0,
    marginHorizontal: 0,
    marginVertical: 0,
    borderColor: "red",
    borderWidth: 1,
    flexDirection: "row",
    top: 0,
    bottom: 0,
    height: "auto",
  },
  spinner: {
    marginTop: 20,
    marginBottom: 60,
  },
});
