import React from 'react';
import {Text, StyleSheet} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

const Home = () => (
  <SafeAreaView style={styles.wrap}>
    <Text>Home</Text>
  </SafeAreaView>
);

const styles = StyleSheet.create({
  wrap: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});

export default Home;
