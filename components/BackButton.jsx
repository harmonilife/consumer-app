// components/BackButton.jsx

import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Icon from '../assets/icons/Index'
import { theme } from '../constants/theme'

const BackButton = ({size=30, router}) => {
  return (
    <Pressable onPress={() => router.back()} style={styles.button}>
        <Icon name='arrowLeft' strokeWidth={2.6} size={size} color={theme.colors.text} />
    </Pressable>
  )
}

export default BackButton

const styles = StyleSheet.create({
    button: {
        alignSelf: 'flex-start',
        borderRadius: 10,
        padding: 5
    }
})