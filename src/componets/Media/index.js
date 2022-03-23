import React, {useEffect, useState} from 'react';
import { StyleSheet, SafeAreaView, View, Image, FlatList } from 'react-native';
import api from '../../services/api';


function Media({id}) {
  const [medias, setMedias] = useState([]);
  useEffect(() => {
    api
      .get(`media?parent=${id}&per_page=1`)
      .then((response) => setMedias(response.data))
      .catch((err) => {
        console.error("ops! ocorreu um erro" + err);
      });
  }, []);

  return (
    <SafeAreaView>
        <FlatList 
          style={styles.container}
          data={medias}
          keyExtractor={(media) => String(media.id)}
          renderItem={(media) => (
              <Image style={styles.mediaImg}
                source={{
                  uri: `${media.item.media_details.sizes.thumbnail.source_url}`
                }}
              />
          )}
        />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
  },
  mediaImg: {
    width: 150,
    height:130,
  }
});

export default Media;