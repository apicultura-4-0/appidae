import React from "react";
import {
  Dimensions,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import LoginBeeImage from "../assets/imgs/loginbee1.png";
import CustomButton from "../components/CustomButton";
import InputField from "../components/InputField";

const LoginScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      {/* 
      Login bee image:
      */}

      <View style={{ alignItems: "center" }}>
        <Image source={LoginBeeImage} style={styles.loginBeeImage} />
      </View>

      {/* 
      The login area below the bee image:
      */}
      <View style={styles.areaBelowImageLogin}>
        <Text style={styles.title}>Entrar</Text>
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
          fieldButtonLabel={"Esqueceu?"}
          fieldButtonFunction={() => {}}
        />
        <CustomButton label={"ENTRAR"} onPress={() => {}} />

        <View style={styles.lineForRegistration}>
          <Text> Não tem conta ainda?</Text>
          <TouchableOpacity onPress={() => navigation.navigate("Register")}>
            <Text style={styles.highlightedText}> Registre-se</Text>
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
  loginBeeImage: {
    width: Dimensions.get("screen").width,
    height: Dimensions.get("screen").width,
    resizeMode: "center",
  },
  areaBelowImageLogin: {
    backgroundColor: "#FFF8EB",
    paddingHorizontal: 25,
    marginTop: -60,
    borderRadius: 15,
  },
  title: {
    fontFamily: "Roboto-medium",
    fontSize: 28,
    fontWeight: "500",
    color: "#333",
    marginBottom: 30,
    marginTop: 15,
  },
  lineForRegistration: {
    flexDirection: "row",
    justifyContent: "center",
  },
  highlightedText: {
    color: "#FED928",
    fontWeight: "700",
  },
});

export default LoginScreen;
