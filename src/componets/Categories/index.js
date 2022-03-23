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
              <View>
                <Text>{categorie.item.name}</Text>
                <Text>VER MAIS ▶</Text>
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
});
export default Categories;