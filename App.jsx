import React from "react";
import { StyleSheet, View, Text } from "react-native";

// Components
import TouchableButton from "./components/TouchableButton";

const App = () => {
  return (
    <View style={{ marginTop: 40, padding: 10 }}>
      <Text>native app</Text>
      <TouchableButton />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({});
