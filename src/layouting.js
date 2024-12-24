import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

const FlexBoxLayout = () => {
  return (
    <View style={styles.container}>
      <View style={styles.box1} />
      <View style={styles.box2} />
      <View style={styles.box3} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    padding: 20,
  },
  box1: {
    width: 50,
    height: 50,
    backgroundColor: 'red',
    borderRadius: 10,
  },
  box2: {
    width: 50,
    height: 50,
    backgroundColor: 'blue',
    borderRadius: 10,
  },
  box3: {
    width: 50,
    height: 50,
    backgroundColor: 'green',
    borderRadius: 10,
  },
});

export default FlexBoxLayout;