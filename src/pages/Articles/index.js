import React from 'react';
import { StyleSheet,Text, View, Image, ScrollView, useWindowDimensions } from 'react-native';
import { useRoute } from '@react-navigation/native';
import RenderHTML from 'react-native-render-html';
import Footer from '../../componets/Footer';

function Articles() {
  const route = useRoute();
  const content = route.params?.content;
  const title = route.params?.title;
  const { width } = useWindowDimensions();
  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.content}>
          <Text style={styles.title}>{title}</Text>
          <RenderHTML  tagsStyles={{img: {width: 310, height: 150}}} contentWidth={width} source={ {html: content} } />
        </View>
        <Footer style={styles.footer}/>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignContent: 'center',
    width: '100%',
    backgroundColor: '#FFF'
  },
  title: {
    fontSize: 30,
    width: 300,
    color: '#1abc9c',
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center'
  },
  content: {
    width: '100%',
    padding: 30,
  },
});

export default Articles;