import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default function MusicLocal() {
  return (
    <View style={styles.appWrapper}>
      <Text>本地音乐处理</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  appWrapper: {
    flexDirection: 'column',
    height: '100%',
  },
});
