import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const FontExample = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hello, World!</Text>
      <Text style={styles.largeText}>This is a larger text.</Text>
      <Text style={styles.redText}>This text is red and italic.</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5', // Memberikan warna latar belakang
    padding: 20, // Memberikan ruang di sekitar layar
  },
  text: {
    fontSize: 20,
    color: '#333333', // Warna abu-abu gelap agar terlihat lebih modern
  },
  largeText: {
    fontSize: 30,
    fontWeight: 'bold', // Warna biru untuk teks besar
    color: '#007BFF',
    marginTop: 15, // Memberikan jarak antar teks
  },
  redText: {
    fontSize: 18,
    color: 'red',
    fontStyle: 'italic',
    textDecorationLine: 'underline', // Menambahkan garis bawah
    marginTop: 15,
  },
});

export default FontExample;