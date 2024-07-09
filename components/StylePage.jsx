import React from "react";
import { StyleSheet, Text, View } from "react-native";
import externalStyle from "../style/style.module";

const StylePage = () => {
  return (
    <View>
      <Text style={{ textAlign: "center" }}>Different types of styles</Text>
      <Text style={styles.center}>Internal style </Text>
      <Text style={externalStyle.center}>External style</Text>
      <Text
        style={{
          marginTop: 20,
          textAlign: "center",
          fontWeight: "800",
          width: 200,
          height: 40,
          backgroundColor: "green",
          marginHorizontal: "auto",
          lineHeight: 40,
          marginVertical: 20,
        }}
      >
        Inline style
      </Text>
    </View>
  );
};

export default StylePage;

const styles = StyleSheet.create({
  center: {
    textAlign: "center",
    fontWeight: "800",
    width: 200,
    height: 40,
    backgroundColor: "red",
    marginHorizontal: "auto",
    lineHeight: 40,
    marginVertical: 20,
  },
});
