import { StyleSheet, View, Text } from "react-native";
import * as React from "react";
import { TextInput, Button } from "react-native-paper";

export default function App() {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.spacecraftText}>Spacecraft</Text>
      </View>
      <View style={styles.form}>
        <TextInput
          label="Email"
          keyboardType="email-address"
          value={email}
          onChangeText={(text) => setEmail(text)}
          style={styles.input}
        />
        <TextInput
          label="Password"
          secureTextEntry={true}
          value={password}
          onChangeText={(text) => setPassword(text)}
          style={styles.input}
          right={<TextInput.Icon icon="eye" />}
        />
        <Button
          mode="contained"
          onPress={() => console.log("Pressed")}
          style={styles.loginButton}
        >
          Login
        </Button>
        <Text style={styles.termsText}>
          by login you accept the Terms and Conditions
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
  },
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
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  form: {
    flex: 2,
  },
  input: {
    margin: 10,
  },
  loginButton: {
    margin: 20,
  },
  termsText: {
    fontSize: 12,
    color: "grey",
    padding: 10,
    textAlign: "center",
  },
});
