import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';
import {ROUTE_PATH, TAB_ROUTE_PATH} from '@/entry/router';
import {useNavigate} from '@/hooks/goto';

export default function MusicSearch() {
  const navigate = useNavigate();
  return (
    <View style={styles.appWrapper}>
      <Text>音乐搜索</Text>
      <Button
        title="跳转用户设置页"
        onPress={() =>
          navigate(ROUTE_PATH.Home, {
            screen: TAB_ROUTE_PATH.Setting,
            params: {data: 'go setting'},
          })
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  appWrapper: {
    flexDirection: 'column',
    height: '100%',
  },
});
