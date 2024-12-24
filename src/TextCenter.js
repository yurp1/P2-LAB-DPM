import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const TextCenter = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hello, World!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#d3d3d3', // Latar belakang abu-abu terang
  },
  text: {
    fontSize: 24, // Ukuran font 24
    color: 'blue', // Warna teks biru
    fontWeight: 'bold', // Gaya teks tebal (bold)
  },
});

export default TextCenter;
