import { StyleSheet, Text, View } from "react-native";

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
    alignItems: "center",
    backgroundColor: "#6850A4",
    flex: 1,
    justifyContent: "center",
    marginBottom: 20
  },
  spacecraftText: {
    color: "#ffffff",
    fontSize: 24,
    fontWeight: "bold",
    paddingHorizontal: 20,
    paddingVertical: 10
  }
});

export default Header;
