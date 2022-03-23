import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import Header from './src/componets/Header';
import api from './src/services/api';

export default function App() {
  const [categories, setCategories] = useState();

  useEffect(() => {
    api
      .get("categories/")
      .then((response) => setCategories(response.data))
      .catch((err) => {
        console.error("ops! ocorreu um erro" + err);
      });
  }, []);

  useEffect(() => {
    console.log(categories);
  }, [categories]);
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Header />
        <Text>Open up App.js to start working on your app!</Text>
        <StatusBar style="auto" />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
