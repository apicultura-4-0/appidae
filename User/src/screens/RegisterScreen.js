import React from "react";
import {
  Dimensions,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import CustomButton from "../components/CustomButton";
import InputField from "../components/InputField";

const RegisterScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.RegisterBlock}>
        <Text style={styles.title}>Registrar</Text>

        <InputField
          label={"Nome Completo"}
          icon={
            <Ionicons
              name="person-outline"
              size={20}
              color="#666"
              style={{ marginRight: 5 }}
            />
          }
        />
        <InputField
          label={"CPF"}
          icon={
            <Ionicons
              name="person-outline"
              size={20}
              color="#666"
              style={{ marginRight: 5 }}
            />
          }
        />
        <InputField
          label={"E-mail"}
          icon={
            <MaterialIcons
              name="alternate-email"
              size={20}
              color="#666"
              style={{ marginRight: 5 }}
            />
          }
          keyboardType="email-address"
        />
        <InputField
          label={"Senha"}
          icon={
            <Ionicons
              name="ios-lock-closed-outline"
              size={20}
              color="#666"
              style={{ marginRight: 5 }}
            />
          }
          inputType="password"
        />
        <InputField
          label={"Confime sua Senha"}
          icon={
            <Ionicons
              name="ios-lock-closed-outline"
              size={20}
              color="#666"
              style={{ marginRight: 5 }}
            />
          }
          inputType="password"
        />

        <CustomButton label={"REGISTRAR"} onPress={() => {}} />

        <View style={styles.register}>
          <Text> Já tem conta?</Text>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Text style={styles.text}> Entrar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#FFF8EB",
  },
  register: {
    flexDirection: "row",
    justifyContent: "center",
  },
  image: {
    width: Dimensions.get("screen").width,
    height: Dimensions.get("screen").width,
    resizeMode: "center",
  },
  title: {
    fontFamily: "Roboto-medium",
    fontSize: 28,
    fontWeight: "500",
    color: "#333",
    marginBottom: 30,
    marginTop: 15,
  },
  inputs: {
    flexDirection: "row",
    borderBottomColor: "#ccc",
    borderBottomWidth: 1,
    paddingBottom: 8,
    marginBottom: 25,
    alignItems: "center",
  },
  RegisterBlock: {
    backgroundColor: "#FFF8EB",
    paddingHorizontal: 25,
  },
  text: {
    color: "#FED928",
    fontWeight: "700",
  },
});

export default RegisterScreen;
