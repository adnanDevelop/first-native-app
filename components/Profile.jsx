import { StyleSheet, Text, View, Button } from "react-native";
import React from "react";

const Profile = () => {
  const onPress = (value) => {
    console.log("Dashboard");
    alert(`Hy my name is ${value}`);
  };

  return (
    <View>
      <Text>Profile component</Text>
      <Button
        color="green"
        title="Go to Dashboard"
        onPress={() => onPress("Adnan")}
      />
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({});
