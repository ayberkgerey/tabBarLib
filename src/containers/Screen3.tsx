import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

export default function Screen3() {
  return (
    <View style={styles.container}>
      <Text>Screen3</Text>
      <Text>Settings</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
