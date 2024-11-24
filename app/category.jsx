// app/category.jsx

import React from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity, Image } from 'react-native';
import { useRouter, useLocalSearchParams } from 'expo-router';
import { categoryPlaces } from '../constants';
import { theme } from '../constants/theme';
import { hp, wp } from '../helpers/common';
import ScreenWrapper from '../components/ScreenWrapper';

const Category = () => {
  const router = useRouter();
  const { categoryName } = useLocalSearchParams();

  // Get the places for the selected category
  const places = categoryPlaces[categoryName] || [];

  return (
    <ScreenWrapper>
      <View style={styles.container}>
        <Text style={styles.headerText}>{categoryName} Near You</Text>
        <FlatList
          data={places}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <PlaceCard place={item} router={router} />}
          ListEmptyComponent={
            <Text style={styles.noPlacesText}>No places found for this category.</Text>
          }
          contentContainerStyle={places.length === 0 && styles.emptyContainer}
        />
      </View>
    </ScreenWrapper>
  );
};

const PlaceCard = ({ place, router }) => {
  const navigateToDetail = () => {
    router.push({
      pathname: 'placeDetail',
      params: {
        name: place.name,
        address: place.address,
        distance: place.distance,
        feesPerMonth: place.feesPerMonth,
        image: place.image,
      },
    });
  };

  return (
    <TouchableOpacity style={styles.placeCard} onPress={navigateToDetail}>
      <Image source={place.image} style={styles.placeImage} resizeMode="cover" />
      <View style={styles.placeInfo}>
        <Text style={styles.placeName}>{place.name}</Text>
        <Text style={styles.placeDistance}>{place.distance}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default Category;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: wp(5),
    backgroundColor: 'white',
  },
  headerText: {
    fontSize: hp(3),
    fontWeight: theme.fonts.semiBold,
    color: theme.colors.text,
    marginBottom: hp(2),
    textAlign: 'center',
  },
  placeCard: {
    marginBottom: hp(3),
    borderRadius: 10,
    overflow: 'hidden',
    backgroundColor: '#f9f9f9',
    elevation: 2, // For Android shadow
    shadowColor: '#000', // For iOS shadow
    shadowOffset: { width: 0, height: 2 }, // For iOS shadow
    shadowOpacity: 0.1, // For iOS shadow
    shadowRadius: 4, // For iOS shadow
  },
  placeImage: {
    width: '100%',
    height: hp(20), // Adjust height as needed
  },
  placeInfo: {
    padding: hp(1.5),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  placeName: {
    fontSize: hp(2.2),
    fontWeight: theme.fonts.medium,
    color: theme.colors.textDark,
  },
  placeDistance: {
    fontSize: hp(1.8),
    color: theme.colors.textLight,
  },
  noPlacesText: {
    fontSize: hp(2),
    color: theme.colors.textLight,
    textAlign: 'center',
    marginTop: hp(5),
  },
  emptyContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
