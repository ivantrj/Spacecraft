import { StyleSheet, View, Text } from "react-native";
import * as React from "react";
import { TextInput, Button } from "react-native-paper";

import Header from "../components/Header";

export default function LoginScreen() {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  return (
    <View style={styles.container}>
      <Header title="SPACECRAFT" />
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
