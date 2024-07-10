import {
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";

const IndicatorLoader = () => {
  const [indicator, setIndicator] = useState(true);

  return (
    <View>
      <Text style={{ marginBottom: 20 }}>ActivityIndicator</Text>
      {indicator && <ActivityIndicator />}
      <TouchableOpacity onPress={() => setIndicator(!indicator)}>
        <Text>Click here</Text>
      </TouchableOpacity>
    </View>
  );
};

export default IndicatorLoader;

const styles = StyleSheet.create({});
