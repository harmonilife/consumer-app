import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ScreenWrapper from '../components/ScreenWrapper'
import BottomNavigation from '../components/BottomNav'
import { StatusBar } from 'expo-status-bar'
import { theme } from '../constants/theme'
import { hp } from '../helpers/common'
import ImageSlider from '../components/ImageSlider'
import HomeCategories from '../components/HomeCategories'

const Home = () => {
  return (
    <ScreenWrapper>
        <StatusBar style='dark' />
        <View style={styles.container}>
          <View style={styles.header}>
            <Text style={styles.headerText}>Harmoni</Text>
          </View>
      
          {/* Home carousel */}
          <View>
            <ImageSlider />
          </View>

          {/* Category section */}
          <View className="flex" >
            <HomeCategories />
          </View>


        </View>
        <BottomNavigation />
    </ScreenWrapper>
  )
}

export default Home

const styles = StyleSheet.create({
  container: {

  }, 
  headerText: {
      color: theme.colors.primaryDark,
      fontSize: hp(4),
      textAlign: "center",
      fontWeight: theme.fonts.extraBold
  }
})