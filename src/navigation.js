import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// Screens
import HomeScreen from './components/Home';
import PokemonDetailScreen from './components/PokemonDetails';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="PokemonDetails" component={PokemonDetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
