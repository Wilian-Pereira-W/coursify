import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import Categories from '../../componets/Categories';
import api from '../../services/api';

function Home() {
  const [categories, setCategories] = useState([]);
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
        <Categories dataCategories={categories} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFF',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
  },

});

export default Home;