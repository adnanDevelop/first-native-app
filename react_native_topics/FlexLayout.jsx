import { StyleSheet, Text, View } from "react-native";
import React from "react";

const FlexLayout = () => {
  return (
    <View style={styles.container}>
      <View style={styles.subChildOne}>
        <Text style={{ color: "white", fontSize: 20 }}>Container 1 </Text>
      </View>
      <View style={styles.subChildTwo}>
        <Text style={{ color: "white", fontSize: 20 }}>Container 2</Text>
      </View>
      <View style={styles.subChildThree}>
        <Text style={{ color: "white", fontSize: 20 }}>Container 3</Text>
      </View>
      {/* <View style={styles.subChildFour}>
      <Text style={{ color: "white", fontSize: 20 }}>Container 4</Text>
    </View> */}
    </View>
  );
};

export default FlexLayout;

const styles = StyleSheet.create({
  container: {
    marginTop: 40,
    flex: 1,
    // flexDirection: "row",
    overflowX: "scroll",
    width: "100%",
  },
  subChildOne: {
    flex: 1,
    backgroundColor: "red",
    alignItems: "center",
    justifyContent: "center",
  },
  subChildTwo: {
    flex: 1,
    backgroundColor: "green",
    alignItems: "center",
    justifyContent: "center",
  },
  subChildThree: {
    flex: 1,
    backgroundColor: "blue",
    alignItems: "center",
    justifyContent: "center",
  },
  subChildFour: {
    flex: 1,
    backgroundColor: "gray",
    alignItems: "center",
    justifyContent: "center",
  },
});
