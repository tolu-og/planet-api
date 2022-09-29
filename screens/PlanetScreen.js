import { View, Text, SafeAreaView, Image, StyleSheet } from "react-native";
import React from "react";
import planets from "../assets/planet.jpeg";

const PlanetScreen = ({ route }) => {
  const { id, name, population, climate } = route.params;
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.planetName}>{JSON.stringify(name)}</Text>
      <Image style={styles.image} source={planets} />

      <Text style={styles.info}>Population: {JSON.stringify(population)}</Text>
      <Text style={styles.info}>Climate: {JSON.stringify(climate)}</Text>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "white",
  },
  info: {
    fontSize: 25,
    margin: 5,
    paddingBottom: 10,
  },
  planetName: {
    margin: 40,
    fontSize: 30,
    fontWeight: "bold",
    textDecorationLine: "underline",
    color: "#3B0087",
  },
  image: {
    width: 350,
    height: 350,
    resizeMode: "contain",
  },
});

export default PlanetScreen;
