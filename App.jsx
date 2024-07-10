import React from "react";
import { StyleSheet, View, Text } from "react-native";

// Components
// import RadioBtn from "./components/RadioBtn";
// import TouchableButton from "./components/TouchableButton";
import IndicatorLoader from "./components/ActivityIndicator";
import DefaultModal from "./components/DefaultModal";

const App = () => {
  return (
    <View style={{ marginTop: 40, padding: 10 }}>
      <Text>native app</Text>
      {/* <TouchableButton /> 
      {/* <RadioBtn /> 
      <IndicatorLoader />
      */}

      <DefaultModal />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({});
