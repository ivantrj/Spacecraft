import React from "react";
import {
  StyleSheet,
  StatusBar,
  View,
  Text,
  FlatList,
  SafeAreaView,
} from "react-native";
import { Card, Button } from "react-native-paper";

import { useStarships } from "~/hooks/useStarships";

type ItemProps = {
  item: {
    name: string;
    model: string;
    manufacturer: string;
    cost_in_credits: string;
  };
};

const Item = ({ item }: ItemProps) => (
  <Card style={styles.card}>
    {/* <Card.Cover source={{ uri: item.image }} /> */}
    <Card.Title
      title={item.name}
      subtitle={item.model}
      titleStyle={{ fontSize: 24 }}
    />
    <Card.Content>
      <Text>{item.manufacturer}s</Text>
      <Text style={{ fontSize: 20 }}>{`${item.cost_in_credits} credits`}</Text>
    </Card.Content>
    <Card.Actions>
      <Button mode="text"> BUY THIS SPACESHIP</Button>
    </Card.Actions>
  </Card>
);

export const StarshipFeedScreen = () => {
  const { isLoading, error, data } = useStarships();

  if (isLoading) {
    return <Text>Loading…</Text>;
  }

  if (error) {
    return <Text>Something bad happened…</Text>;
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.headerTitle}>Starships</Text>
      <View style={styles.itemsContainer}>
        <FlatList
          data={data.results}
          renderItem={({ item }) => <Item item={item} />}
          keyExtractor={(item) => item.name.toString()}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0, // only for Android to avoid status bar overlap
  },
  itemsContainer: {
    paddingHorizontal: 20,
    marginTop: 20,
  },
  headerTitle: {
    padding: 16,
    fontSize: 32,
    fontWeight: "bold",
  },
  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
  card: {
    margin: 8,
    backgroundColor: "white",
  },
});
