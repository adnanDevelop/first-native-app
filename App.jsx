import React, { useState } from "react";
import { StyleSheet, View, Text, TextInput, Button } from "react-native";

const App = () => {
  const [formData, setFormData] = useState({
    name: "",
    lastName: "",
    email: "",
    password: "",
  });

  const handleChange = (name, value) => {
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const submitForm = () => {
    console.log(
      formData.name,
      formData.lastName,
      formData.email,
      formData.password
    );

    setFormData({
      name: "",
      lastName: "",
      email: "",
      password: "",
    });
  };

  return (
    <View style={{ marginTop: 50, paddingHorizontal: 14 }}>
      <View style={{ marginBottom: 20 }}>
        <Text style={{ textAlign: "center", fontWeight: "800", fontSize: 30 }}>
          Sign In
        </Text>
      </View>
      <View>
        <Text style={styles.inputLabel}>Name</Text>
        <TextInput
          placeholder="Name"
          style={styles.input}
          value={formData.name}
          onChangeText={(e) => handleChange("name", e)}
        />
      </View>
      <View style={{ marginTop: 20 }}>
        <Text style={styles.inputLabel}>Last Name</Text>
        <TextInput
          placeholder="Last name"
          style={styles.input}
          value={formData.lastName}
          onChangeText={(e) => handleChange("lastName", e)}
        />
      </View>
      <View style={{ marginTop: 20 }}>
        <Text style={styles.inputLabel}>Email</Text>
        <TextInput
          placeholder="E-mail"
          value={formData.email}
          style={styles.input}
          onChangeText={(e) => handleChange("email", e)}
          keyboardType="email-address"
        />
      </View>
      <View style={{ marginTop: 20 }}>
        <Text style={styles.inputLabel}>Password</Text>
        <TextInput
          placeholder="Password"
          value={formData.password}
          style={styles.input}
          onChangeText={(e) => handleChange("password", e)}
          secureTextEntry={true}
        />
      </View>
      <View style={{ marginTop: 20 }}>
        <Button title="Submit" color="green" onPress={submitForm} />
      </View>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  inputLabel: { marginBottom: 5 },
  input: {
    borderWidth: 1,
    borderColor: "black",
    padding: 10,
    height: 40,
  },
  btn: {
    height: 40,
  },
});
