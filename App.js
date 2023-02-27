import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button
        title="Go to A"
        onPress={() => navigation.navigate('A')}
      />
      <Button
        title="Go to B"
        onPress={() => navigation.navigate('B')}
      />
    </View>
  );
}

function Ascreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>This is screen A!</Text>
    </View>
  );
}

function Bscreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>This is screen B</Text>
    </View>
  );
}
const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="A" component={Ascreen} />
        <Stack.Screen name="B" component={Bscreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;