import React from "react";
import { StyleSheet, View } from "react-native";

import Profile from "./components/Profile";
import StylePage from "./components/StylePage";

const App = () => {
  return (
    <View style={{ marginTop: 40 }}>
      <Profile />
      <StylePage />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({});
