import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

const StylingExample = () => {
  return (
    <View style={styles.container}>
      <View style={styles.horizontalContainer}> {/* Baris Pertama */}
        <View style={styles.boxleft}> {/* Kotak Kiri */}</View>
        <View style={styles.boxcenter}> {/* Kotak Tengah */}</View>
        <View style={styles.boxright}> {/* Kotak Kanan */}</View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5', // Warna latar belakang untuk container
  },
  boxleft: {
    width: 100, // Ukuran kotak seragam
    height: 100,
    backgroundColor: 'darkgreen',
    margin: 10, // Memberikan jarak dengan elemen lain
    borderRadius: 10, // Membuat sudut melengkung
    justifyContent: 'center', // Menempatkan teks di tengah
    alignItems: 'center',
    shadowColor: '#000', // Menambahkan efek bayangan
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    elevation: 4, // Untuk efek bayangan di Android
  },
  boxcenter: {
    width: 150, // Ukuran kotak seragam
    height: 150,
    backgroundColor: 'lightgreen',
    margin: 10, // Memberikan jarak dengan elemen lain
    borderRadius: 10, // Membuat sudut melengkung
    justifyContent: 'center', // Menempatkan teks di tengah
    alignItems: 'center',
    shadowColor: '#000', // Menambahkan efek bayangan
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    elevation: 4, // Untuk efek bayangan di Android
  },
  boxright: {
    width: 100, // Ukuran kotak seragam
    height: 100,
    backgroundColor: 'yellow',
    margin: 10, // Memberikan jarak dengan elemen lain
    borderRadius: 10, // Membuat sudut melengkung
    justifyContent: 'center', // Menempatkan teks di tengah
    alignItems: 'center',
    shadowColor: '#000', // Menambahkan efek bayangan
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    elevation: 4, // Untuk efek bayangan di Android
  },
  text: {
    fontSize: 18,
    color: 'white',
    fontWeight: 'bold',
  },
  horizontalContainer: {
    flexDirection: 'row', // Mengatur tata letak horizontal
    justifyContent: 'space-between', // Jarak merata antara kotak
    width: '90%', // Mengatur lebar baris horizontal
    marginTop: 20, // Memberikan jarak antar baris
  },
});

export default StylingExample;
