import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

function HomeScreen({ navigation }) {
  return (
    <View style={styles.app}>
      <Text>Home Screen</Text>
      <Button 
      title="Go to A"
      onPress={() => navigation.navigate('A')}>
      </Button>

      <Button 
      title="Go to B"
      onPress={() => navigation.navigate('B')}>
      </Button>
    </View>

  );
}

function Ascreen({ navigation }) {
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
  </View>
  );
}

function Bscreen({ navigation }) {
  return (
    <View style={styles.app}>
      <Text>B Screen</Text>
      <Button 
      title="Go to E"
      onPress={() => navigation.navigate('E')}>
      </Button>

      <Button 
      title="Go to F"
      onPress={() => navigation.navigate('F')}>
      </Button>
    </View>
  );
}

function Escreen({ navigation }) {
  return (
    <View style={styles.app}>
      <Text>E Screen</Text>
    <Row>
      <Col numRows={2}>
        <Text>Screen E</Text>
      </Col>
      <Col numRows={2}>
        <Text>Second column</Text>
      </Col>
    </Row>
  </View>
  );
}

function Fscreen({ navigation }) {
  return (
    <View style={styles.app}>
    <Row>
      <Col numRows={2}>
        <Text>Screen F</Text>
      </Col>
      <Col numRows={2}>
        <Text>Second column</Text>
      </Col>
    </Row>
  </View>
  );
}



const Stack = createNativeStackNavigator();

// Styles
const styles = {
  app: {
    flex: 2, // the number of columns you want to devide the screen into
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
  <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="A" component={Ascreen} />
        <Stack.Screen name="B" component={Bscreen} />
        <Stack.Screen name="E" component={Escreen} />
        <Stack.Screen name="F" component={Fscreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;