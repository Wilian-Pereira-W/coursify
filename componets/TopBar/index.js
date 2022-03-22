import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

function TopBar() {
  return (
    <View>
      <Image
        source={require('../../public/images/logo-2.png')}
      />
      <Image 
      source={require('../../public/images/menu.png')}
      />
    </View>
  );
}

export default TopBar;