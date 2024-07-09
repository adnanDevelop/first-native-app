import React, { useState } from "react";
import { StyleSheet, View, Text, TextInput, Button } from "react-native";

const App = () => {
  return (
    <View style={{ marginTop: 50, paddingHorizontal: 14 }}>
      <Text>working</Text>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  inputLabel: { marginBottom: 5 },
  input: {
    borderWidth: 1,
    borderColor: "black",
    padding: 10,
    height: 40,
  },
  btn: {
    height: 40,
  },
});
