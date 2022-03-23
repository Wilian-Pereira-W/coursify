import React from 'react';
import { StyleSheet, SafeAreaView, View, Image, Text, FlatList } from 'react-native';
import Media from '../Media';
import Posts from '../Posts';


function Categories({dataCategories}) {
  return (
    <SafeAreaView>
        <FlatList 
          style={styles.container}
          data={dataCategories}
          keyExtractor={(categorie) => String(categorie.id)}
          renderItem={(categorie) => (
            <View>
              <View style={styles.categorie}>
                <Text style={styles.categorieTitle}>{categorie.item.name.toUpperCase()}</Text>
                <Text style={styles.categorieViewMore}>VER MAIS ▶</Text>
              </View>
              <Posts id={categorie.item.id} />
            </View>
          )}
        />
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
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
    color: '#1abc9c',
    fontWeight: 'bold'
  },
  categorieViewMore: {
    fontSize: 15,
  }
});
export default Categories;