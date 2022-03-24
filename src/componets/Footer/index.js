import React, { useState } from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity, Linking } from 'react-native';

function Footer() {
  const [url] = useState('https://coursify.me/');
  const handleClick = () => {
    Linking.openURL(url);
  }
  return (
    <View style={styles.container}>
      <Image style={styles.footerImg}
        source={require('../../assets/images/logo-coursify-w.png')}
      />
      <Text 
        numberOfLines={3} 
        style={styles.footerText}>
          O Coursify.me é uma plataforma de ensino a distâcia,
          onde qualquer pessoa ou empresa pode construir seu EAD e vender cursos pela internet
      </Text>
      <TouchableOpacity onPress={() => handleClick()} style={styles.footerBtn}>
        <Text style={styles.footerBtnText}>Quero conhecer a plataformal</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#1abc9c',
    width: '100%',
    height: 260,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    marginTop: 30
  },
  footerImg: {
    marginBottom: 15,
  },
  footerText: {
    color: '#FFF',
    width: 350,
    textAlign: 'center',
    marginBottom: 30,
  },
  footerBtn: {
    height: 50,
    width: 350,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,
    backgroundColor: '#f9a825',
  },
  footerBtnText: {
    color: '#FFF'
  }
});
export default Footer;