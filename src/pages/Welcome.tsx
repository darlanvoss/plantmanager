import React from 'react';
import { Text, SafeAreaView, Image, TouchableOpacity, StyleSheet, Dimensions, Button, View } from 'react-native';
import wateringImg from '../assets/watering.png';
import { Feather } from '@expo/vector-icons';
import fonts from '../styles/fonts';

export function Welcome() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.wrapper}>
        <Text style={styles.title}>
          Gerencie {'\n'}
          suas plantas de {'\n'}
          forma fácil
        </Text>

        <Image source={wateringImg} style={styles.image} resizeMode="contain" />

        <Text style={styles.subtitle}>
          Não esqueça mais de regar as suas plantas!
        </Text>

        <TouchableOpacity style={styles.button} activeOpacity={0.8}>
          <Feather name="chevron-right" style={styles.buttonIcon} />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  wrapper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingHorizontal: 20
  },
  title: {
    fontSize: 28,
    textAlign: 'center',
    color: '#52665A',
    marginTop: 38,
    fontFamily: fonts.heading,
    lineHeight: 34
  },
  subtitle: {
    textAlign: 'center',
    fontSize: 18,
    paddingHorizontal: 20,
    color: '#52665A',
    fontFamily: fonts.text
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
  buttonIcon: {
    color: '#FFFFFF',
    fontSize: 24
  },
  image: {
    height: Dimensions.get('window').width * 0.7
  }
})