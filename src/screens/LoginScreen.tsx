import * as React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Button, TextInput } from "react-native-paper";

import Header from "../components/Header";

export default function LoginScreen() {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [passwordVisible, setPasswordVisible] = React.useState(false);

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
          secureTextEntry={!passwordVisible}
          value={password}
          onChangeText={(text) => setPassword(text)}
          style={styles.input}
          right=<TextInput.Icon
            icon={passwordVisible ? "eye" : "eye-off"}
            onPress={() => setPasswordVisible(!passwordVisible)}
          />
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
    backgroundColor: "#fff",
    flex: 1,
    justifyContent: "center"
  },
  form: {
    flex: 2
  },
  input: {
    margin: 10
  },
  loginButton: {
    margin: 20
  },
  termsText: {
    color: "grey",
    fontSize: 12,
    padding: 10,
    textAlign: "center"
  }
});
