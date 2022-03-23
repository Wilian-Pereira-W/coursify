import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import Header from './src/componets/Header';
import Categories from './src/componets/Categories';
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

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Header />
        <Categories dataCategories={categories} />
        <StatusBar style="auto" />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
