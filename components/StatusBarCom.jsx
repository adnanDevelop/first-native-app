import React, { useState } from "react";
import { Button, StatusBar, StyleSheet, Text, View } from "react-native";

const StatusBarCom = () => {
  const [backgroundColor, setBackgroundColor] = useState("white");
  const [showBar, setShowBar] = useState(true);

  const handleChangeColor = () => {
    const newColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    setBackgroundColor(newColor);
    setShowBar(!showBar);
  };

  const status = {
    backgroundColor: "white",
    barStyle: "dark-content || white-content || default",
    hidden: false || true,
    translucent: false || true, // ya add kernay ye status bar ki position fixed hojaigi aur contnet uske back side py ajaiga
  };

  return (
    <View
      style={{ marginTop: 20, backgroundColor: backgroundColor, height: 600 }}
    >
      <Text>StatusBarCom</Text>

      <View>
        <StatusBar backgroundColor={backgroundColor} hidden={showBar} />
      </View>

      <Button title="Change Color" onPress={handleChangeColor} />
    </View>
  );
};

export default StatusBarCom;

const styles = StyleSheet.create({});
