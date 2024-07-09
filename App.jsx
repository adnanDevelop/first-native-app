import React from "react";
import { StyleSheet, View } from "react-native";

import Profile from "./components/Profile";
import Dashboard from "./components/Dashboard";

const App = () => {
  return (
    <View style={{ marginTop: 40 }}>
      <Profile />
      <Dashboard />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({});
