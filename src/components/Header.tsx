import { StyleSheet, View, Text } from "react-native";

interface HeaderProps {
  title: string;
}

function Header(props: HeaderProps) {
  return (
    <View style={styles.header}>
      <Text style={styles.spacecraftText}>{props.title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#6850A4",
    marginBottom: 20,
  },
  spacecraftText: {
    color: "#ffffff",
    fontSize: 24,
    fontWeight: "bold",
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
});

export default Header;
