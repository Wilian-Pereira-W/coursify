import React from 'react';
import { Image, View, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/pages/Home';
import Articles from './src/pages/Articles';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name="Home" 
          component={Home} 
          options={{
            headerTitle: (props) => (
              <>
                <Image
                  source={require('./src/assets/images/logo-2.png')}
                />
                <View style={styles.menu}>
                <Image style={styles.menuImg}
                  source={require('./src/assets/images/menu.png')}
                />
                </View>
              </>
            )
          }}
        />
        <Stack.Screen name="Articles" component={Articles} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  // container: {
  //   flexDirection: 'row',
  //   alignItems: 'center',
  //   justifyContent: 'space-around',
  //   width: '100%',
  //   marginTop: 35,
  //   height: 60,
  //   borderBottomWidth: 1,
  //   borderColor: '#D3D3D3',
  //   paddingLeft: 10,
  //   paddingRight: 10,
  // },
  menu: {
    backgroundColor: '#1abc9c',
    borderRadius: 50,
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 175,
  },
  menuImg: {
    width: 30,
    height: 30,
  }
});

export default App;