import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const Signup = () => {
  const navigation = useNavigation();
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={{ fontWeight: "bold", fontSize: 30 }}>Signup</Text>
      <TouchableOpacity onPress={() => navigation.navigate("Login")}>
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
          Login
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Signup;

const styles = StyleSheet.create({});
