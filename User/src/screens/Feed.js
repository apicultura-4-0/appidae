import { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import Header from "../components/Header";

class Feed extends Component {
  render() {
    return (
      <View style={StyleSheet.container}>
        <Header />
        <Text>testeeeee</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5F5F5",
  },
});

export default Feed;
