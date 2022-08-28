import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import { FlatList, StyleSheet, View } from "react-native";
import CoinItem from "./src/components/CoinItem";
import axios from "axios";

export default function App() {
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState("");

  axios({
    method: "get",
    url: "https://api.coingecko.com/api/v3/coins/markets?vs_currency=lkr&order=market_cap_desc&per_page=100&page=1&sparkline=false",
  }).then((res) => {
    setCoins(res.data);
    console.log(res.data);
  });

  const filteredCoins = coins.filter((coin) =>
    coin.name.toLowerCase().includes(search.toLowerCase())
  );

  // axios
  //   .get(
  //     "https://api.coingecko.com/api/v3/coins/markets?vs_currency=lkr&order=market_cap_desc&per_page=100&page=1&sparkline=false"
  //   )
  //   .then((res) => {
  //     setCoins(res.data);
  //   });

  // useEffect(() => {
  //   axios
  //     .get(
  //       "https://api.coingecko.com/api/v3/coins/markets?vs_currency=lkr&order=market_cap_desc&per_page=100&page=1&sparkline=false"
  //     )
  //     .then((res) => {
  //       setCoins(res.data);
  //     });
  // });

  return (
    <View style={styles.container}>
      {filteredCoins.map((coin) => {
        return <CoinItem image={coin.image} name={coin.name} />;
      })}
      <CoinItem />
      {/* <FlatList
      data={}
      renderItem={({ item }) => <CoinItem name={item}/> }
      /> */}

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
});
