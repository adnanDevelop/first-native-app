import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";

const App = () => {
  return (
    <View>
      <Text style={styles.text}>hello world</Text>
      <Button title="Button" />
      <Button title="Button" style={{ marginTop: 20 }} />
      <MyData />
    </View>
  );
};

export default App;

const MyData = () => {
  return <Text style={{ marginTop: 20 }}>MyData</Text>;
};

const styles = StyleSheet.create({
  text: {
    color: "red",
    fontSize: 20,
  },
  btnStyle: {
    backgroundColor: "red !important",
    marginTop: 10,
    color: "white",
  },
});
