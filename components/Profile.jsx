import { StyleSheet, Text, View, Button } from "react-native";
import React, { useState } from "react";

const Profile = () => {
  const [name, setName] = useState("John");

  console.log(name);

  return (
    <View>
      <Text>My name is : {name}</Text>
      <View>
        <Button
          title="Increment"
          onPress={() => {
            if (name === "Adnan") {
              setName("John");
            } else {
              setName("Adnan");
            }
          }}
        />
        <Button title="Decrement" />
      </View>
      <Button color="green" title="Go to Dashboard" />
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({});
