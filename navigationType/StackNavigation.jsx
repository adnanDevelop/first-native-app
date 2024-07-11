import React from "react";
import { StyleSheet, Text, View } from "react-native";

const StackNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="Signup" component={Signup} />
      </Stack.Navigator>
      <View>
        <Text>StackNavigation</Text>
      </View>
    </NavigationContainer>
  );
};

export default StackNavigation;

const styles = StyleSheet.create({});
