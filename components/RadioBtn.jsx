import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";

const RadioBtn = () => {
  const [activeRadio, setActiveRadio] = useState(1);

  return (
    <View style={{ marginTop: 10 }}>
      <Text>RadioBtn</Text>

      <View>
        <TouchableOpacity
          onPress={() => setActiveRadio(1)}
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            gap: 10,
          }}
        >
          <View
            style={{
              width: 40,
              height: 40,
              borderRadius: 20,
              borderWidth: 2,
            }}
          >
            {activeRadio === 1 && (
              <View
                style={{
                  flex: 1,
                  margin: 3,
                  borderRadius: 100,
                  backgroundColor: "red",
                }}
              />
            )}
          </View>
          <View>
            <Text style={{ fontSize: 16 }}>First Radio</Text>
          </View>
        </TouchableOpacity>
      </View>
      {/* Second */}
      <View>
        <TouchableOpacity
          onPress={() => setActiveRadio(2)}
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            gap: 10,
          }}
        >
          <View
            style={{
              width: 40,
              height: 40,
              borderRadius: 20,
              borderWidth: 2,
            }}
          >
            {activeRadio === 2 && (
              <View
                style={{
                  flex: 1,
                  margin: 3,
                  borderRadius: 100,
                  backgroundColor: "red",
                }}
              />
            )}
          </View>
          <View>
            <Text style={{ fontSize: 16 }}>First Radio</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default RadioBtn;

const styles = StyleSheet.create({});
