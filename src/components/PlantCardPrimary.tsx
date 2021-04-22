import React from 'react';
import { StyleSheet, Text, Image } from 'react-native';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';
import { SvgFromUri } from 'react-native-svg';
import fonts from '../styles/fonts';

interface PlantProps extends RectButtonProps {
    data: {
        name: string,
        photo: string
    }
}

export const PlantCardPrimary = ({ data, ...rest } : PlantProps) => {
    return (
        <RectButton style={styles.container} {...rest}>

            <SvgFromUri uri={data.photo} />

            <Text style={styles.text}>
                {data.name}
            </Text>
            
        </RectButton>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        maxWidth: '45%',
        backgroundColor: '#F0F0F0',
        borderRadius: 20,
        paddingVertical: 10,
        alignItems: 'center',
        margin: 10
    },
    text: {
        color: '#2B7A4B',
        fontFamily: fonts.heading,
        marginVertical: 16
    }
})