// components/ImageSlider.jsx

import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { hp, wp } from '../helpers/common'

const ImageSlider = () => {
  return (
    <View style={styles.container}>
      <Image 
        source= {require('../assets/images/home-header-2.webp')}
        resizeMode='cover'
        style={{width: wp(90), height: hp(20)}}
        className='rounded-[10px] absolute'
      />
    </View>
  )
}

export default ImageSlider

const styles = StyleSheet.create({
  container: {
    width: wp(90),
    height: hp(20),
    margin: 20,
    marginBottom: 30,
    backgroundColor: 'red',
    borderRadius: 10
  }
})