import {
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";

const PressableComponent = () => {
  //   const onPress = () => {
  //     console.log("onPress");
  //   };

  const onLongPress = () => {
    console.log("onLongPress");
  };

  //   const onPressIn = () => {
  //     console.log("onPressIn");
  //   };

  //   const onPressOut = () => {
  //     console.log("onPressOut");
  //   };

  return (
    <View
      style={{
        marginTop: 20,
        height: 600,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Pressable
        // style={{
        //   backgroundColor: "red",
        // }}
        // onPress={onPress}
        onLongPress={onLongPress}
        // onPressIn={onPressIn}
        // onPressOut={onPressOut}
      >
        <Text
          style={{
            color: "white",
            paddingHorizontal: 20,
            height: 40,
            lineHeight: 40,
            textAlign: "center",
            backgroundColor: "black",
            borderRadius: 10,
            textTransform: "capitalize",
            fontWeight: "800",
            letterSpacing: 1,
          }}
        >
          PressableComponent
        </Text>
      </Pressable>
    </View>
  );
};

export default PressableComponent;

const styles = StyleSheet.create({});
