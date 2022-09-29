import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ActivityIndicator,
  FlatList,
  TouchableOpacity,
} from "react-native";
import React, { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/core";

const planetUrl = "https://swapi.dev/api/planets";

const HomeScreen = () => {
  const navigation = useNavigation();

  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [planet, setPlanet] = useState([]);

  useEffect(() => {
    fetch(planetUrl)
      .then((response) => response.json()) // get response, convert to json
      .then((json) => {
        setData(json.results);
      })
      .catch((error) => alert(error)) // display errors
      .finally(() => setLoading(false)); // change loading state
  }, []);

  // Also get call asynchronous function
  async function getMoviesAsync() {
    try {
      let response = await fetch(planetUrl);
      let json = await response.json();
      setData(json.movies);
      setLoading(false);
    } catch (error) {
      alert(error);
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Planets</Text>
      {/* While fetching show the indicator, else show response*/}
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <View>
          {/* Display each planet */}

          <FlatList
            data={data}
            renderItem={({ item, id }) => (
              <TouchableOpacity
                key={id}
                onPress={() => {
                  navigation.navigate("Planet", {
                    id: item.id,
                    name: item?.name,
                    population: item?.population,
                    climate: item?.climate,
                  });
                }}
              >
                <Text style={styles.planetName}>{item.name}</Text>
              </TouchableOpacity>
            )}
          />
        </View>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,

    marginTop: 48,
  },

  title: {
    margin: 40,
    fontSize: 30,
    fontWeight: "bold",
    textDecorationLine: "underline",
    color: "#3B0087",
  },
  planetName: {
    marginLeft: 40,
    fontSize: 25,
    fontWeight: "200",
    margin: 5,
    textDecorationLine: "underline",
    paddingBottom: 10,
  },
});

export default HomeScreen;
