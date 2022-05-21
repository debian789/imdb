import {
  View,
  Text,
  FlatList,
  StyleSheet,
  ActivityIndicator,
} from "react-native";
import React from "react";

export default function MovieList(props) {
  const { movies, loadMovies } = props;

  return (
    <FlatList
      data={movies}
      numColumns={1}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={styles.flatListContentContainer}
      keyExtractor={(movie) => movie.id}
      renderItem={({ item }) => <Text>{item.title}</Text>}
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
    paddingHorizontal: 5,
  },
  spinner: {
    marginTop: 20,
    marginBottom: 60,
  },
});
