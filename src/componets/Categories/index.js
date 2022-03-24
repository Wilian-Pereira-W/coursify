import React from 'react';
import { StyleSheet, SafeAreaView, View, Text, FlatList, ScrollView } from 'react-native';
import Footer from '../Footer';
import Posts from '../Posts';


function Categories({dataCategories}) {
  return (
    <View style={styles.container}>
      <ScrollView>
        {
          dataCategories.map((categorie) => (
            <View key={categorie.id}>
              <View style={styles.categorie}>
                <Text style={styles.categorieTitle} numberOfLines={2}>{categorie.name.toUpperCase()}</Text>
                <Text style={styles.categorieViewMore}>VER MAIS ▶</Text>
              </View>
              <Posts id={categorie.id} />
            </View>
          ))
        }
        <View>
            <Footer />
        </View>
      </ScrollView>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1
  },
  categorie: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    paddingLeft: 20,
    paddingRight: 10,
    marginTop: 30,
    marginBottom: 12,
  },
  categorieTitle: {
    fontSize: 18,
    width: 300,
    color: '#1abc9c',
    fontWeight: 'bold'
  },
  categorieViewMore: {
    fontSize: 15,
  },
});
export default Categories;