import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { EnviromentButton } from '../components/EnviromentButton';
import { Header } from '../components/Header';
import fonts from '../styles/fonts';

export function PlantSelect() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Header />
        <Text style={styles.title}>
          Em qual ambiente
        </Text>
        <Text style={styles.subtitle}>
          Voce quer colocar sua planta?
        </Text>
      </View>
      
      <View>
        <FlatList horizontal data={[1,2,3,4,5]} renderItem={(item) => (
          <EnviromentButton title="Cozinha" active />
        )}/>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  header: {
    paddingHorizontal: 30
  },
  title: {
    fontSize: 17,
    color: '#52665A',
    fontFamily: fonts.heading,
    lineHeight: 20,
    marginTop: 15
  },
  subtitle: {
    fontSize: 17,
    fontFamily: fonts.text,
    lineHeight: 20,
    color: '#52665A'
  }
})