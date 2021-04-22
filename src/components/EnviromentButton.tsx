import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';
import fonts from '../styles/fonts';

interface EnviromentButtonProps extends RectButtonProps {
  title: string,
  active?: boolean;
}

export function EnviromentButton({
  title,
  active = false,
  ...rest
}: EnviromentButtonProps) {
  return (
    <RectButton style={[
      styles.container,
      active && styles.containerActive
    ]}>
      <Text style={[
        styles.text,
        active && styles.textActive
      ]}>
        {title}
      </Text>
    </RectButton>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F0F0F0',
    width: 76,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 12
  },
  containerActive: {
    backgroundColor: '#DAF2E4'
  },
  text: {
    color: '#52665A',
    fontFamily: fonts.text
  },
  textActive: {
    fontFamily: fonts.heading,
    color: '#2B7A4B',
  }
})