// app/_layout.js
import { Stack, useRouter, useSegments } from 'expo-router';
import { View } from 'react-native';
import React from 'react';

const _layout = () => {

  return (
    <>
      <Stack 
        screenOptions={{
          headerShown: false,
        }} 
      />
    </>
  );
};

export default _layout;
