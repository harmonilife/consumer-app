// BottomNavigation.js
import React from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';
import Icon from '../assets/icons/Index';
import { hp } from '../helpers/common';

export default function BottomNavigation() {
  const router = useRouter();

  return (
    <View style={styles.bottomNav}>
      <Pressable style={styles.button} onPress={() => router.push('/home')}>
        <Icon name='home' style={styles.navButton} />
      </Pressable>
      <Pressable style={styles.button} onPress={() => router.push('/category')}>
        <Icon name='category' style={styles.navButton} />
      </Pressable>
      <Pressable style={styles.button} onPress={() => router.push('/notifications')}>
        <Icon name='notification' style={styles.navButton} />
      </Pressable>
      <Pressable style={styles.button} onPress={() => router.push('/profile')}>
        <Icon name='profile' style={styles.navButton} />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: hp(9),
    padding: 10,
    backgroundColor: '#eee',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
  button: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
  navButton: {
    bottom: hp(1)
  }
});
