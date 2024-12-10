// app/welcome.jsx

import { StyleSheet, Text, View, Image, Pressable } from 'react-native'
import React from 'react'
import ScreenWrapper from '../components/ScreenWrapper'
import { StatusBar } from 'expo-status-bar'
import { hp, wp } from '../helpers/common'
import { theme } from '../constants/theme'
import Button from '../components/Button'
import { useRouter } from 'expo-router'

const Welcome = () => {

  const router = useRouter();

  return (
    <ScreenWrapper>
      <StatusBar style='dark'/>
      <View style={styles.container}>
        {/* Welcome Image */}
        <Image style={styles.welcomeImage} resizeMode='contain' source={require('../assets/images/welcome.png')}/>

        {/* Welcome title */}
        <View style={{gap: 10}}>
            <Text style={styles.title}>Harmoni</Text>
            <Text style={styles.punchline}>The Healthy Community.</Text>
        </View>

        {/* footer */}
        <View style={styles.footer}>
          <Button
            title='Log In'
            onPress={() => router.push('login')}
          />
          <View style={styles.loginTextContainer}>
            <Text style={styles.loginText}>
              Don't have an account?
            </Text>
            <Pressable onPress={() => router.push('signUp')}>
              <Text style={[styles.loginText, {color: theme.colors.primaryDark, fontWeight: theme.fonts.semiBold}]}>
                Register
              </Text>
            </Pressable>
          </View>
        </View>
      </View>
    </ScreenWrapper>
  )
}

export default Welcome

const styles = StyleSheet.create({
    container : {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-around',
        paddingHorizontal: wp(4)
    }, 
    welcomeImage : {
        height: hp(30),
        width: wp(100),
        alignSelf: 'center'
    },
    title: {
      color: theme.colors.text,
      fontSize: hp(4),
      textAlign: "center",
      fontWeight: theme.fonts.extraBold
    },
    punchline: {
        color: theme.colors.text,
        paddingHorizontal: wp(10),
        alignItems: "center",
        fontSize: hp(1.7)
    },
    footer: {
      gap: 30,
      width: wp(80)
    },
    loginTextContainer: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      gap: 5
    },
    loginText: {
      textAlign: 'center',
      color: theme.colors.text,
      fontSize: hp(1.6)
    }
})