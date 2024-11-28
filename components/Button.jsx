// components/Button.jsx

import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { theme } from '../constants/theme'
import { hp, wp } from '../helpers/common'
import Loading from './Loading'

const Button = ({
    buttonStyle,
    textStyle,
    title='',
    onPress = () => {},
    loading=false,
    hasShadow=true,
}) => {
    
    const shadowStyle = {
        shadowColor: theme.colors.dark,
        shadowOffset: {width: 0, height: 10},
        shadowOpacity: 0.3,
        shadowRadius: 8,
        elevation: 4
    }

    if(loading) return(
        <View style={[styles.button, buttonStyle, {backgroundColor: 'white'}]}>
            <Loading />
        </View>
    )

  return (
    <Pressable onPress={onPress} style={[styles.button, buttonStyle, hasShadow && shadowStyle]}>
        <Text style={[styles.text, textStyle]}>{title}</Text>
    </Pressable>
  )
}

export default Button

const styles = StyleSheet.create({
    button: {
        backgroundColor: theme.colors.primary,
        height: hp(6.6),
        width: wp(80),
        alignItems: "center",
        justifyContent: "center",
        borderCurve: 'continuous',
        borderRadius: 10,
    },
    text: {
        fontSize: hp(2.5),
        color: 'white',
        fontWeight: theme.fonts.bold
    }
})