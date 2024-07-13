import { Button, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";

const Login = ({ navigation }) => {
  console.log(navigation);

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={{ fontWeight: "bold", fontSize: 30 }}>Login</Text>
      <TouchableOpacity onPress={() => navigation.navigate("SignUp")}>
        <Text
          style={{
            fontWeight: "bold",
            width: 120,
            height: 40,
            lineHeight: 40,
            backgroundColor: "blue",
            color: "white",
            textAlign: "center",
            borderRadius: 10,
            marginTop: 10,
          }}
        >
          SignUp
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({});
