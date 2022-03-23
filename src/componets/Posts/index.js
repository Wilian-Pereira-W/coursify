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
            <View>
              <Media id={post.item.id}/>
              <Text>{post.item.title.rendered}</Text>
              <Text>{post.item.excerpt.rendered}</Text>
              <Text>Leia mais</Text>
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

export default Posts;