import React from "react";
import { StyleSheet, StatusBar, View, Text, FlatList } from "react-native";
import { Card } from "react-native-paper";

import data from "../../api/data.json";

type ItemProps = {
  item: {
    name: string;
    model: string;
    crew: string;
    hyperdrive_rating: string;
    cost_in_credits: string;
  };
};

const Item = ({ item }: ItemProps) => (
  <Card style={styles.card}>
    <Card.Cover source={{ uri: "https://picsum.photos/seed/car/400/200" }} />
    <Card.Title title={item.name} subtitle={item.model} />
    <Card.Content>
      <Text>{`Crew: ${item.crew}`}</Text>
      <Text>{`Hyperdrive Rating: ${item.hyperdrive_rating}`}</Text>
      <Text>{`Cost in Credits: ${item.cost_in_credits}`}</Text>
    </Card.Content>
  </Card>
);

export const StarshipFeedScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <FlatList
          data={data.results}
          renderItem={({ item }) => <Item item={item} />}
          keyExtractor={(item) => item.name.toString()}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0, // only for Android to avoid status bar overlap
  },
  headerContainer: {
    paddingHorizontal: 20,
    marginTop: 20,
  },
  item: {
    // backgroundColor: "purple",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
  card: {
    marginVertical: 8,
  },
});
