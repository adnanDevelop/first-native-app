import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Modal,
  Button,
} from "react-native";
import React, { useState } from "react";

const DefaultModal = () => {
  const [isModalOpen, setModalOpen] = useState(false);

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
      <TouchableOpacity>
        <Text
          style={{
            color: "white",
            width: 150,
            height: 40,
            lineHeight: 40,
            textAlign: "center",
            backgroundColor: "black",
            borderRadius: 10,
            textTransform: "capitalize",
            fontWeight: "800",
            letterSpacing: 1,
          }}
          onPress={() => setModalOpen(!isModalOpen)}
        >
          {isModalOpen ? "Close Modal" : "Open Modal"}
        </Text>
      </TouchableOpacity>

      <Modal transparent={true} visible={isModalOpen}>
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <View
            style={{
              backgroundColor: "white",
              width: 200,
              height: 200,
              padding: 20,
              elevation: 3,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 10,
            }}
          >
            <Text style={{ fontSize: 20, fontWeight: "800", marginBottom: 10 }}>
              Modal
            </Text>
            <View>
              <Button title="Close Modal" onPress={() => setModalOpen(false)} />
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default DefaultModal;

const styles = StyleSheet.create({});
