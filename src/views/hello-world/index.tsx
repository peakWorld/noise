import React from 'react';
import {Text, StyleSheet} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

const HelloWorld = () => (
  <SafeAreaView style={styles.wrap}>
    <Text>HelloWorld</Text>
  </SafeAreaView>
);

const styles = StyleSheet.create({
  wrap: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});

export default HelloWorld;
