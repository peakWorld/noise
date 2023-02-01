import React, {memo} from 'react';
import {StyleSheet, View} from 'react-native';

function PageBackground() {
  return <View style={style.wrapper} />;
}
export default memo(PageBackground, () => true);

const style = StyleSheet.create({
  wrapper: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    width: '100%',
    height: '100%',
  },
});
