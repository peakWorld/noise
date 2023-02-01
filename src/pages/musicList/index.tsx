import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default function MusicList() {
  return (
    <View style={styles.appWrapper}>
      <Text>音乐列表详情</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  appWrapper: {
    flexDirection: 'column',
    height: '100%',
  },
});
