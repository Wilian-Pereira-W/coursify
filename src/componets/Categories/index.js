import React, { useState } from 'react';
import { StyleSheet, View, Image, Text, ScrollView, TouchableOpacity } from 'react-native';
import Footer from '../Footer';
import Posts from '../Posts';

const options = [
  {id: 1, title: 'Padrão'},
  {id: 2, title: 'A-Z'},
  {id: 3, title: 'Z-A'},
  {id: 4, title: 'Mais visualizados'},
  {id: 5, title: 'Menos visualizados'}]

function Categories({dataCategories}) {
  const [listCategories, setListCategories] = useState(dataCategories);
  const [text, setText] = useState('Padrão');
  const [selected, setSelected] = useState('Padrão');
  const [modalVisible, setModalVisible] = useState(false);
  
  const handlePress = (option) =>{
    if(option.title === 'Padrão') {
      const standardValue = dataCategories.sort((a, b) => {
        if (a.name < b.name) return -1;
        if (a.name > b.name) return 1;
        return 0;
      });
      setListCategories(standardValue);
      setSelected(option.title);
      setText(option.title);
      setModalVisible(false);
    };
    if(option.title === 'A-Z') {
      const ascendingOrder = dataCategories.sort((a, b) => {
          if (a.name < b.name) return -1;
          if (a.name > b.name) return 1;
          return 0;
        }
      );
      setListCategories(ascendingOrder);
      setSelected(option.title);
      setText(option.title);
      setModalVisible(false);
    };
    if(option.title === 'Z-A') {
      const descendingOrder = dataCategories.sort((a, b) => {
        if (a.name > b.name) return -1;
        if (a.name < b.name) return 1;
        return 0;
      });
      setListCategories(descendingOrder);
      setSelected(option.title);
      setText(option.title);
      setModalVisible(false);
    }
    if(option.title === 'Mais visualizados') {
      const descendingOrder = dataCategories.sort((a, b) => b.count - a.count);
      console.log(descendingOrder);
      setListCategories(descendingOrder);
      setSelected(option.title);
      setText(option.title);
      setModalVisible(false);
    };
    if(option.title === 'Menos visualizados') {
      const ascendingOrder = dataCategories.sort((a, b) => a.count - b.count);
      setListCategories(ascendingOrder);
      setSelected(option.title);
      setText(option.title);
      setModalVisible(false);
    };

  };
  return (
    <View style={styles.container}>
      <ScrollView>
      <View style={styles.containerSelect}>
        <Text style={styles.selectText}>
          ORDENAR POR: 
        </Text>
        <View>

        <TouchableOpacity 
          style={styles.select}
          onPress={() => setModalVisible(true)}
        >
          <Text>{text}</Text>
          {modalVisible ? (
            <Image style={styles.selectChavron}
              source={require('../../assets/images/chevron-2.png')} 
            />
          ) : 
          (
            <Image style={styles.selectChavron}
              source={require('../../assets/images/chevron-1.png')} 
            />
          )}
        </TouchableOpacity>
        {modalVisible && (
          <View style={styles.options}>
            {options.map((option) => (
              <TouchableOpacity key={option.id} style={styles.optionBtn} 
                onPress={() => handlePress(option)}>
                <Text numberOfLines={2}>{option.title}</Text>
                {option.title === selected && (
                  <Image style={styles.selectChavron}
                  source={require('../../assets/images/check.png')} 
                  />
                )}
              </TouchableOpacity>
            ))}
          </View>
        )}
         </View>
      </View>
        {
          listCategories.map((categorie) => (
            <View key={categorie.id}>
              <View style={styles.categorie}>
                <Text style={styles.categorieTitle} numberOfLines={2}>{categorie.name.toUpperCase()}</Text>
                <Text style={styles.categorieViewMore}>VER MAIS ▶</Text>
              </View>
              <Posts id={ categorie.id } />
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
  containerSelect: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingLeft: 20,
    paddingRight: 10,
    marginTop: 30,
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
  select: {
    height: 50,
    backgroundColor: '#fff',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#000',
    width: 150,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingLeft: 20,
    paddingRight: 10,
  },
  selectChavron: {
    width: 25,
    height: 15,
  },
  selectText: {
    fontWeight: 'bold',
    fontSize: 18,
    color: '#6B6E70'
  },
  options: {
    backgroundColor: '#fff',
    position: 'absolute',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#000',
    width: 150,
    height: 230,
    paddingLeft: 20,
    paddingRight: 10,
    marginTop:50,
    zIndex: 2,
  },
  optionBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 20
  }

});
export default Categories;