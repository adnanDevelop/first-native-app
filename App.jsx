import React from "react";
import { StyleSheet, View, Text } from "react-native";

// Components
// import TouchableButton from "./components/TouchableButton";
import RadioBtn from "./components/RadioBtn";

const App = () => {
  return (
    <View style={{ marginTop: 40, padding: 10 }}>
      <Text>native app</Text>
      {/* <TouchableButton /> */}
      <RadioBtn />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({});
