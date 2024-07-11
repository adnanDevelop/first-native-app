import { StyleSheet, Text, View, Button } from "react-native";
import React, { useState } from "react";

const Profile = () => {
  const [name, setName] = useState("John");

  return (
    <View>
      <Text>My name is : {name}</Text>
      <View>
        <Button
          title="Change Name"
          onPress={() => {
            if (name === "Adnan") {
              setName("John");
            } else {
              setName("Adnan");
            }
          }}
        />
      </View>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({});
