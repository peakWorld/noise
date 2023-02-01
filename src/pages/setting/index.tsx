import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {useParams} from '@/hooks/goto';

export default function Setting() {
  const params = useParams();
  console.log('Setting', params);
  return (
    <View style={styles.appWrapper}>
      <Text>软件配置相关</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  appWrapper: {
    flexDirection: 'column',
    height: '100%',
  },
});
