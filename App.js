import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: "https://assets.coingecko.com/coins/images/1/large/bitcoin.png",
        }}
        style={{ height: 30, width: 30 }}
      />
      <View>
        <Text style={styles.title}>Bitcoin</Text>
        <View style={{ flexDirection: "row" }}>
          <Text style={styles.text}>1</Text>
          <Text style={styles.text}>BTC</Text>
          <Text style={styles.text}>0.63%</Text>
        </View>
      </View>
      <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121212",
    paddingTop: 50,
  },
  title: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  text: {
    color: "white",
  },
});
