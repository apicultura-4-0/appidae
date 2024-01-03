import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

export default function CustomButton({ label, onPress }) {
  return (
    <TouchableOpacity onPress={onPress} style={styles.login}>
      <Text style={styles.loginText}>{label}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  login: {
    backgroundColor: "#FED928",
    padding: 18,
    borderRadius: 15,
    marginTop: 15,
    marginBottom: 30,
  },
  loginText: {
    textAlign: "center",
    fontWeight: "700",
    fontSize: 16,
    color: "#000",
  },
});
