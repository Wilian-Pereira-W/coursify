import React, {useEffect, useState} from 'react';
import { StyleSheet, SafeAreaView, View, Text, FlatList } from 'react-native';
import api from '../../services/api';
import Media from '../Media'


function Posts({id}) {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    api
      .get(`posts?categories=${id}`)
      .then((response) => setPosts(response.data))
      .catch((err) => {
        console.error("ops! ocorreu um erro" + err);
      });
  }, []);

  return (
    <SafeAreaView>
        <FlatList 
          style={styles.container}
          data={posts}
          horizontal
          keyExtractor={(post) => String(post.id)}
          renderItem={(post) => (
            <View style={styles.postContents}>
              <Media id={post.item.id}/>
              <Text style={styles.postTitle} numberOfLines={2}>{post.item.title.rendered}</Text>
              <Text numberOfLines={4} style={styles.postExcerpt}>{post.item.excerpt.rendered.replace('<p>', '')}</Text>
              <Text style={styles.postReadMore}>Leia mais</Text>
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
  postContents: {
    marginBottom: 10,
    borderWidth: 0.1,
    borderRadius: 15,
    margin: 20,
    borderColor: '#D3D3D3',
    paddingBottom: 10
  },
  postTitle: {
    marginLeft: 10,
    width: 180,
    fontSize: 15,
    color: '#1abc9c',
    margin: 10,
  },
  postExcerpt: {
    marginLeft: 10,
    width: 180,
    fontSize: 15,
    margin: 10,
  },
  postReadMore: {
    marginLeft: 10,
    width: 180,
    fontSize: 15,
    color: '#f9a825',
    fontWeight: 'bold'
  }
});

export default Posts;