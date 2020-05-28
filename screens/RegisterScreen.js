import React, { Component } from "react";
import {
  View,
  KeyboardAvoidingView,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import * as firebase from "firebase";

export default class RegisterScreen extends Component {
  state = {
    name: "",
    email: "",
    password: "",
    errorMessage: null,
  };

  handleSignUp = () => {
    firebase
      .auth()
      .createUserWithEmailAndPassword(this.state.email, this.state.password)
      .then((userCredentials) => {
        return userCredentials.user.updateProfile({
          displayName: this.state.name,
        });
      })
      .catch((error) => this.setState({ errorMessage: error.message }));
  };

  render() {
    return (
      <KeyboardAvoidingView
        behavior={Platform.OS == "ios" ? "padding" : "height"}
        style={styles.container}
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.inner}>
            <Text
              style={styles.greeting}
            >{`Witaj!\nUtwórz konto aby dołączyć.`}</Text>

            <View style={styles.errorMessage}>
              {this.state.errorMessage && (
                <Text
                  style={{
                    fontFamily: "inter-semiBold",
                    fontSize: 13,
                    color: "#cc0000",
                  }}
                >
                  {this.state.errorMessage}
                </Text>
              )}
            </View>

            <View style={styles.form}>
              <Text style={styles.inputTitle}>Imię:</Text>
              <TextInput
                style={styles.input}
                autoCapitalize="none"
                onChangeText={(name) => this.setState({ name })}
                value={this.state.name}
              ></TextInput>
            </View>

            <View style={styles.form}>
              <Text style={styles.inputTitle}>E-mail:</Text>
              <TextInput
                style={styles.input}
                autoCapitalize="none"
                onChangeText={(email) => this.setState({ email })}
                value={this.state.email}
              ></TextInput>
            </View>

            <View style={styles.form}>
              <Text style={styles.inputTitle}>Hasło:</Text>
              <TextInput
                style={styles.input}
                secureTextEntry
                autoCapitalize="none"
                onChangeText={(password) => this.setState({ password })}
                value={this.state.password}
              ></TextInput>
            </View>
            <TouchableOpacity style={styles.button} onPress={this.handleSignUp}>
              <Text
                style={{
                  color: "#ffffff",
                  fontFamily: "inter-semiBold",
                  fontSize: 16,
                }}
              >
                Zarejestruj Się
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={{ alignSelf: "center", marginTop: 32 }}
              onPress={() => this.props.navigation.navigate("Login")}
            >
              <Text
                style={{
                  fontFamily: "inter-regular",
                  fontSize: 13,
                  color: "#414959",
                }}
              >
                Masz już konto?{" "}
                <Text
                  style={{ fontFamily: "inter-semiBold", color: "#174D40" }}
                >
                  Zaloguj się!
                </Text>
              </Text>
            </TouchableOpacity>
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  inner: {
    justifyContent: "center",
    padding: 24,
    flex: 1,
  },
  greeting: {
    fontSize: 18,
    fontWeight: "400",
    textAlign: "center",
    fontFamily: "inter-semiBold",
  },
  errorMessage: {
    height: 36,
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 30,
  },
  form: {
    marginBottom: 48,
    marginHorizontal: 30,
  },
  inputTitle: {
    color: "#8a8f9e",
    fontSize: 10,
    textTransform: "uppercase",
    fontFamily: "inter-regular",
  },
  input: {
    borderBottomColor: "#8a8f9e",
    borderBottomWidth: StyleSheet.hairlineWidth,
    height: 40,
    fontSize: 15,
  },
  button: {
    marginHorizontal: 30,
    backgroundColor: "#174D40",
    borderRadius: 5,
    height: 52,
    alignItems: "center",
    justifyContent: "center",
  },
});
