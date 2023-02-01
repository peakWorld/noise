import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

export default function MusicPlay() {
  return (
    <View style={styles.wrapper}>
      <Text>音乐播放</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'column',
    // height: '100%',
    flex: 1,
  },
});
