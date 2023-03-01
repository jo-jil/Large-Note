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

// Styles
const styles = {
  app: {
    flex: 4, // the number of columns you want to devide the screen into
    marginHorizontal: "auto",
    width: 400,
    backgroundColor: "red"
  },
  row: {
    flexDirection: "row"
  },
  "1col":  {
    backgroundColor:  "lightblue",
    borderColor:  "#fff",
    borderWidth:  1,
    flex:  1
  },
  "2col":  {
    backgroundColor:  "green",
    borderColor:  "#fff",
    borderWidth:  1,
    flex:  2
  },
  "3col":  {
    backgroundColor:  "orange",
    borderColor:  "#fff",
    borderWidth:  1,
    flex:  3
  },
  "4col":  {
    flex:  4
  }
};

// RN Code
const Col = ({ numRows, children }) => {
  return  (
    <View style={styles[`${numRows}col`]}>{children}</View>
  )
}

const Row = ({ children }) => (
  <View style={styles.row}>{children}</View>
)

function App()  {
  return (
    <View style={styles.app}>
      <Row>
        <Col numRows={2}>
          <Text>First column</Text>
        </Col>
        <Col numRows={2}>
          <Text>Second column</Text>
        </Col>
      </Row>
      <Row>
        <Col numRows={1}>
          <Text>First column</Text>
        </Col>
        <Col numRows={3}>
          <Text>Second Column</Text>
        </Col>
      </Row>
    </View>
  )
}
/*
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
}*/

export default App;