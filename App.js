import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import BottomTabNavigator from "./BottomTabNavigator";

import HomeScreen from "./screens/HomeScreen";
import PlanetScreen from "./screens/PlanetScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={{ headerShown: false }}
          name="Tabs"
          component={BottomTabNavigator}
        />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen
          options={{ headerShown: false, presentation: "modal" }}
          name="Planet"
          component={PlanetScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
