import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';

export default function Screen1({navigation}) {
  return (
    <View style={styles.container}>
      <Text>Screen1</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          navigation.push('screen2');
        }}>
        <Text style={styles.buttonText}>Go to Screen2</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    marginTop: 10,
    width: '60%',
    height: 55,
    borderRadius: 10,
    backgroundColor: 'grey',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    fontWeight: '700',
    color: 'white',
  },
});
