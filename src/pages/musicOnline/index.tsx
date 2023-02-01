import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default function MusicOnline() {
  return (
    <View style={styles.appWrapper}>
      <Text>线上音乐管理</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  appWrapper: {
    flexDirection: 'column',
    height: '100%',
  },
});
