import {
  Button,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableHighlight,
  View,
} from "react-native";
import React from "react";

const TouchableButton = () => {
  return (
    <View>
      <Text>Normal button</Text>
      <Button title="Click me" />
      <Text>Touchable button with styles</Text>
      <TouchableOpacity>
        <Text style={styles.touchBtn}>Touchable button</Text>
      </TouchableOpacity>
      <Text>Touchable Highlights</Text>
      <TouchableHighlight>
        <Text style={styles.highlightBtn}>Touchable hightlight</Text>
      </TouchableHighlight>
    </View>
  );
};

export default TouchableButton;

const styles = StyleSheet.create({
  touchBtn: {
    color: "white",
    width: 150,
    height: 40,
    lineHeight: 40,
    textAlign: "center",
    backgroundColor: "black",
    borderRadius: 10,
    textTransform: "capitalize",
    fontWeight: "800",
    letterSpacing: 1,
  },
  highlightBtn: {
    color: "white",
    width: 150,
    height: 40,
    lineHeight: 40,
    textAlign: "center",
    backgroundColor: "purple",
    borderRadius: 10,
    textTransform: "capitalize",
    fontWeight: "800",
    letterSpacing: 1,
  },
});
