import React from 'react';
import { StyleSheet, SafeAreaView, View, Image } from 'react-native';

function Header() {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Image style={styles.logo}
          source={require('../../assets/images/logo-2.png')}
        />
        <View style={styles.menu}>
          <Image style={styles.menuImg}
          source={require('../../assets/images/menu.png')}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    width: '100%',
    marginTop: 120,
    height: 60,
    borderBottomWidth: 1,
    borderColor: '#D3D3D3',
    paddingLeft: 10,
    paddingRight: 10,
  },
  menu: {
    backgroundColor: '#1abc9c',
    borderRadius: 50,
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 'auto',
  },
  menuImg: {
    width: 30,
    height: 30,
  }
});

export default Header;