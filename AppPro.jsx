import React from 'react';
import {View, SafeAreaView, Text, Image, StyleSheet} from 'react-native';

function AppPro({theme}) {
  //   const isDarkMode = useColorScheme() === 'dark';
  console.log('theme', theme);
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <Text style={theme === 'dark' ? styles.whiteText : styles.blackText}>
          {' '}
          Hello World{' '}
        </Text>
        <Text> Hello World </Text>
        <Text> Hello World </Text>
        <Text> Hello Abin </Text>
        <Image
          source={{uri: 'https://reactjs.org/logo-og.png'}}
          style={{width: 40, height: 40}}
        />
      </View>
    </SafeAreaView>
  );
}

export default AppPro;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0a0a0a',
    alignItems: 'center',
    justifyContent: 'center',
  },
  whiteText: {
    color: '#ffffff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  blackText: {
    color: '#0fae0f',
    fontSize: 20,
    fontWeight: 'bold',
  },
});
