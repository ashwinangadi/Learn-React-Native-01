import React from 'react';
import {SafeAreaView, useColorScheme, StyleSheet} from 'react-native';
import AppPro from './AppPro';

function App() {
  const isDarkMode = useColorScheme() === 'dark';
  console.log('isDark', isDarkMode);

  return (
    <SafeAreaView style={styles.container}>
      <AppPro theme={isDarkMode ? 'dark' : 'light'} />
    </SafeAreaView>
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0a0a0a',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
