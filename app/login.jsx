// app/login.jsx

import { Alert, Pressable, StyleSheet, Text, View } from 'react-native';
import React, { useRef, useState } from 'react';
import ScreenWrapper from '../components/ScreenWrapper';
import { StatusBar } from 'expo-status-bar';
import BackButton from '../components/BackButton';
import { useRouter } from 'expo-router';
import { wp, hp } from '../helpers/common';
import { theme } from '../constants/theme';
import Input from '../components/textInput';
import Icon from '../assets/icons/Index';
import Button from '../components/Button';

const Login = () => {
  const router = useRouter();
  const emailRef = useRef('');
  const passwordRef = useRef('');
  const [loading, setLoading] = useState('');

  const onSubmit = async () => {
      if(!emailRef.current || !passwordRef.current) {
        Alert.alert('login', "Please enter all the credentials");
        return
      }

      const email = 'xyz';
      const password = '1234';

      if(emailRef.current == email && passwordRef.current == password) {
        router.push('home');
      } else {
        Alert.alert('login', "Wrong credenials");
      }
  }

  return (

    <ScreenWrapper>
        <StatusBar style="dark" />
        <View style={styles.container}>
          <BackButton router={router} />

          {/* Welcome */}
          <View>
            <Text style={styles.welcomeText}>Hey,</Text>
            <Text style={styles.welcomeText}>Welcome Back</Text>
          </View>

          {/* Form */}
          <View style={styles.form}>
            <Text style={{ fontSize: hp(1.5), color: theme.colors.text }}>
              Please login to continue
            </Text>
            <Input 
              icon={<Icon name='mail' strokeWidth={1.6} size={26} />}
              placeholder='Enter your email'
              onChangeText={(value) => emailRef.current = value}
            />
            <Input 
              icon={<Icon name='password' strokeWidth={1.6} size={26} />}
              placeholder='Enter your password'
              secureTextEntry
              onChangeText={(value) => passwordRef.current = value}
            />
            <Text style={styles.forgotPassword}>Forgot Password?</Text>

          </View>

          <View style={styles.footer}>
            <Button
              title={'Login'}
              loading={loading}
              onPress={onSubmit}
            />
            <View style={styles.loginTextContainer}>
              <Text style={styles.loginText}>
                Don't have an account!
              </Text>
              <Pressable onPress={() => router.push('signUp')}>
                <Text style={[styles.loginText, {color: theme.colors.primaryDark, fontWeight: theme.fonts.semiBold}]}>
                  Sign Up
                </Text>
              </Pressable>
            </View>
        </View>



        </View>


      </ScreenWrapper>
   
    
      
    
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: wp(5),
    gap: 45,
  },
  welcomeText: {
    fontSize: hp(4),
    fontWeight: theme.fonts.semiBold,
    color: theme.colors.text,
  },
  form: {
    gap: 25,
  },
  forgotPassword: {
    textAlign: 'right',
    fontWeight: theme.fonts.semiBold,
    color: theme.colors.text,
  },
  footer: {
    gap: 30,
    marginTop: 135,
    width: wp(90),
    justifyContent: 'center',
    alignItems: 'center'
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
});
