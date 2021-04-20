import React from 'react';
import { Text, SafeAreaView, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { Button } from '../components/Button';

import colors from '../styles/colors';
import wateringImg from '../assets/watering.png';

export function Welcome() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>
        Gerencie {'\n'}
        suas plantas {'\n'}
        de forma fácil
      </Text>

      <Image source={wateringImg} style={styles.image} />

      <Text style={styles.subtitle}>
        Não esqueça mais de regar as suas plantas!
      </Text>

      <Button title='>' />

    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#52665A',
    marginTop: 38
  },
  subtitle: {
    textAlign: 'center',
    fontSize: 18,
    paddingHorizontal: 20,
    color: '#52665A'
  },
  button: {
    backgroundColor: '#32B768',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 16,
    marginBottom: 10,
    height: 56,
    width: 56
  },
  image: {
    height: 292,
    width: 284
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 24
  }
})