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
  const { movies, loadMovies, navigation } = props;
  //console.log(props);

  return (
    <FlatList
      data={movies}
      numColumns={3}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={styles.flatListContentContainer}
      keyExtractor={(movie) => movie.id}
      renderItem={({ item }) => (
        <CardMovie movie={item} navigation={navigation} />
      )}
      onEndReached={loadMovies}
      onEndReachedThreshold={0.1}
      ListFooterComponent={() => {
        return (
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
  );
}

const styles = StyleSheet.create({
  flatListContentContainer: {
    backgroundColor: "white",
    borderColor: "red",
    borderWidth: 1,
  },
  spinner: {
    marginTop: 20,
    marginBottom: 60,
  },
});
