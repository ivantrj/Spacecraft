import React from "react";
import {
  ActivityIndicator,
  FlatList,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View
} from "react-native";
import { useIsConnected } from "react-native-offline";
import { Button, Card } from "react-native-paper";

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
  const isConnected = useIsConnected();

  if (!isConnected) {
    return (
      <SafeAreaView style={styles.container}>
        <Text style={styles.headerTitle}>Starships</Text>
        <View style={styles.offlineContainer}>
          <Text style={styles.offlineText}>
            Offline, trying to reconnect...
          </Text>
          <ActivityIndicator
            size="large"
            color="white"
          />
        </View>
      </SafeAreaView>
    );
  }

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
  card: {
    backgroundColor: "white",
    margin: 8
  },
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0 // only for Android to avoid status bar overlap
  },
  headerTitle: {
    fontSize: 32,
    fontWeight: "bold",
    padding: 16
  },
  item: {
    marginHorizontal: 16,
    marginVertical: 8,
    padding: 20
  },
  itemsContainer: {
    marginTop: 20,
    paddingHorizontal: 20
  },
  offlineContainer: {
    alignItems: "center",
    backgroundColor: "red",
    borderRadius: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 12,
    padding: 10
  },
  offlineText: {
    color: "white",
    marginRight: 10
  },
  title: {
    fontSize: 32
  }
});
