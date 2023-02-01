import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default function MusicCollect() {
  return (
    <View style={styles.wrapper}>
      <View>
        <Text>音乐收藏夹列表</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'column',
    flex: 1,
  },
});
