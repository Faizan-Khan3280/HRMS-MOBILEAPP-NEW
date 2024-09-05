import React, { useState } from "react";
import LogoImage from "../../assets/Logo.png";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
} from "react-native";






const LoginScreen = () => {
  const [username, setUsername] = useState("null");
  const [password, setPassword] = useState("null");
  const [domain, setDomain] = useState("null");

  const handleLogin = async () => {
   
  };

  const handleForgotPassword = () => {
    console.log("Forgot password clicked");
  };

  return (
    <View style={styles.container}>
      <Image source={LogoImage} style={styles.logoImage} />

      <View style={styles.inputView}>
        <TextInput
          style={styles.inputText}
          placeholder="Username"
          placeholderTextColor="white"
          onChangeText={(text) => setUsername(text)}
        />
      </View>

    
      <View style={styles.inputView}>
        <TextInput
          style={styles.inputText}
          placeholder="Password"
          placeholderTextColor="white"
          onChangeText={(text) => setPassword(text)}
          secureTextEntry
        />
      </View>

    
      <View style={styles.inputView}>
        <TextInput
          style={styles.inputText}
          placeholder="Company name"
          placeholderTextColor="white"
          onChangeText={(text) => setDomain(text)}
        />
      </View>

   
      <TouchableOpacity style={styles.loginBtn} onPress={handleLogin}>
        <Text style={styles.loginText}>Login</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={handleForgotPassword}>
        <Text style={styles.forgotPasswordText}>Forgot password?</Text>
      </TouchableOpacity>


      <View style={styles.signUpView}>
        <TouchableOpacity>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  logoImage: {
    width: 190, 
    height: 50, 
    marginBottom: 90, 
  },
  inputView: {
    width: "80%",
    backgroundColor: "#002e30",
    borderRadius: 25,
    height: 50,
    marginBottom: 20,
    justifyContent: "center",
    padding: 20,
  },
  inputText: {
    height: 50,
    color: "white",
  },
  loginBtn: {
    width: "80%",
    backgroundColor: "#fb5b5a",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
    marginBottom: 10,
  },
  loginText: {
    color: "white",
  },
  forgotPasswordText: {
    color: "#00828e",
    marginTop: 10,
  },
  signUpView: {
    flexDirection: "row",
    marginTop: 20,
  },
  signUpText: {
    color: "#003f5c",
  },
  signUpButton: {
    color: "#fb5b5a",
    marginLeft: 10,
  },
 
});

export default LoginScreen;
