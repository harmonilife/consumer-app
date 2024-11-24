// app/placeDetail.jsx

import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from 'react-native';
import { useRouter, useLocalSearchParams } from 'expo-router';
import { theme } from '../constants/theme';
import { hp, wp } from '../helpers/common';
import ScreenWrapper from '../components/ScreenWrapper';
import Button from '../components/Button';

const PlaceDetail = () => {
  const router = useRouter();
  const { name, address, distance, feesPerMonth, image } = useLocalSearchParams();

  return (
    <ScreenWrapper>
      <ScrollView contentContainerStyle={styles.container}>
        {/* Place Image */}
        <Image source={image} style={styles.placeImage} resizeMode="cover" />

        {/* Place Information */}
        <View style={styles.infoContainer}>
          <Text style={styles.placeName}>{name}</Text>
          <Text style={styles.placeAddress}>{address}</Text>
          <Text style={styles.placeDistance}>Distance: {distance}</Text>
          <Text style={styles.placeFees}>Fees per Month: {feesPerMonth}</Text>
        </View>

        {/* Reserve Booking Button */}
        <View style={styles.buttonContainer}>
          <Button title="Reserve a Booking" onPress={() => {}} />
        </View>
      </ScrollView>
    </ScreenWrapper>
  );
};

export default PlaceDetail;

const styles = StyleSheet.create({
  container: {
    padding: wp(5),
    backgroundColor: 'white',
    alignItems: 'center',
  },
  placeImage: {
    width: wp(90),
    height: hp(30),
    borderRadius: 10,
    marginBottom: hp(3),
  },
  infoContainer: {
    width: '100%',
    paddingHorizontal: wp(2),
    marginBottom: hp(5),
    alignItems: 'center',
  },
  placeName: {
    fontSize: hp(3),
    fontWeight: theme.fonts.bold,
    color: theme.colors.textDark,
    marginBottom: hp(1),
    textAlign: 'center',
  },
  placeAddress: {
    fontSize: hp(2),
    color: theme.colors.textLight,
    marginBottom: hp(1),
    textAlign: 'center',
  },
  placeDistance: {
    fontSize: hp(2),
    color: theme.colors.textLight,
    marginBottom: hp(1),
    textAlign: 'center',
  },
  placeFees: {
    fontSize: hp(2),
    color: theme.colors.textLight,
    marginBottom: hp(3),
    textAlign: 'center',
  },
  buttonContainer: {
    width: '100%',
    alignItems: 'center',
  },
});
