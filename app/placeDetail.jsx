// app/placeDetail.jsx

import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import { useRouter, useLocalSearchParams } from 'expo-router';
import { theme } from '../constants/theme';
import { hp, wp } from '../helpers/common';
import ScreenWrapper from '../components/ScreenWrapper';
import Button from '../components/Button';
import { categoryPlaces } from '../constants';
import { FontAwesome, MaterialIcons } from '@expo/vector-icons'; // Import necessary icon sets
import Loading from '../components/Loading'; // Ensure Loading component is imported

const PlaceDetail = () => {
  const router = useRouter();
  const { id, categoryName } = useLocalSearchParams(); // Receive id and categoryName
  const [place, setPlace] = useState(null);

  useEffect(() => {
    if (id && categoryName) {
      const placesArray = categoryPlaces[categoryName];
      if (placesArray) {
        const foundPlace = placesArray.find((item) => item.id === id);
        setPlace(foundPlace);
        console.log('Found Place:', foundPlace);
      } else {
        console.warn(`Category "${categoryName}" not found in categoryPlaces.`);
      }
    } else {
      console.warn('id or categoryName is missing in navigation params.');
    }
  }, [id, categoryName]);

  if (!place) {
    return (
      <ScreenWrapper>
        <View style={styles.loadingContainer}>
          <Loading />
        </View>
      </ScreenWrapper>
    );
  }

  const { name, address, distance, feesPerMonth, image, amenities } = place;

  // Mapping between amenity names and their corresponding icons
  const amenityIcons = {
    Shower: 'shower', // MaterialIcons
    Sauna: 'hot-tub', // MaterialIcons
    Parking: 'two-wheeler', // MaterialIcons
    'Wi-Fi': 'wifi', // FontAwesome
    // Add more mappings as needed
  };

  return (
    <ScreenWrapper>
      <ScrollView contentContainerStyle={styles.container}>
        {/* Place Image */}
        <Image source={image} style={styles.placeImage} resizeMode="cover" />

        {/* Place Information */}
        <View style={styles.infoContainer}>
          <View style={styles.nameFeesContainer}>
            <Text style={styles.placeName}>{name}</Text>
            <Text style={styles.placeFees}>{feesPerMonth}</Text>
          </View>
          <Text style={styles.placeAddress}>{address}</Text>
          <Text style={styles.placeDistance}>Distance: {distance}</Text>
        </View>

        {/* Amenities Section */}
        <View style={styles.amenitiesContainer}>
          <Text style={styles.sectionTitle}>Amenities</Text>
          <View style={styles.amenitiesList}>
            {amenities && amenities.length > 0 ? (
              amenities.map((amenity, index) => (
                <View key={index} style={styles.amenityItem}>
                  {amenityIcons[amenity] ? (
                    amenity === 'Wi-Fi' ? (
                      <FontAwesome
                        name={amenityIcons[amenity]}
                        size={24}
                        color={theme.colors.primary}
                        style={styles.amenityIcon}
                      />
                    ) : (
                      <MaterialIcons
                        name={amenityIcons[amenity]}
                        size={24}
                        color={theme.colors.primary}
                        style={styles.amenityIcon}
                      />
                    )
                  ) : (
                    <FontAwesome
                      name="check-circle"
                      size={24}
                      color={theme.colors.primary}
                      style={styles.amenityIcon}
                    />
                  )}
                  <Text style={styles.amenityText}>{amenity}</Text>
                </View>
              ))
            ) : (
              <Text style={styles.noAmenitiesText}>No amenities listed.</Text>
            )}
          </View>
        </View>

        {/* Reserve Booking Button */}
        <View style={styles.buttonContainer}>
          <Button title="Reserve a Booking" onPress={() => { /* Handle reservation */ }} />
        </View>
      </ScrollView>
    </ScreenWrapper>
  );
};

export default PlaceDetail;

const styles = StyleSheet.create({
  container: {
    padding: wp(5),
    // backgroundColor: 'white',
    alignItems: 'center',
    paddingBottom: hp(5), // Ensure button is visible
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
    marginBottom: hp(3),
  },
  nameFeesContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: hp(1),
  },
  placeName: {
    fontSize: hp(3),
    fontWeight: theme.fonts.bold,
    color: theme.colors.textDark,
    textAlign: 'left',
    flex: 1, // Take up available space
  },
  placeFees: {
    fontSize: hp(2.2),
    fontWeight: theme.fonts.medium,
    color: theme.colors.primary, // Highlight fees
    textAlign: 'left',
    marginLeft: wp(2),
  },
  placeAddress: {
    fontSize: hp(2),
    color: theme.colors.textLight,
    marginBottom: hp(1),
    textAlign: 'left',
  },
  placeDistance: {
    fontSize: hp(2),
    color: theme.colors.textLight,
    textAlign: 'left',
  },
  amenitiesContainer: {
    width: '100%',
    paddingHorizontal: wp(2),
    marginBottom: hp(5),
  },
  sectionTitle: {
    fontSize: hp(2.2),
    fontWeight: theme.fonts.bold,
    color: theme.colors.textDark,
    marginBottom: hp(2),
    textAlign: 'left',
  },
  amenitiesList: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  amenityItem: {
    alignItems: 'center', // Center align items horizontally
    marginRight: wp(4),
    marginBottom: hp(3),
    width: wp(20), // Defines the width of each amenity item
  },
  amenityIcon: {
    marginBottom: hp(1), // Space between icon and text
  },
  amenityText: {
    fontSize: hp(1.8),
    color: theme.colors.textDark,
    textAlign: 'center', // Centers the text below the icon
  },
  noAmenitiesText: {
    fontSize: hp(2),
    color: theme.colors.textLight,
    fontStyle: 'italic',
  },
  buttonContainer: {
    width: '100%',
    alignItems: 'center',
    marginTop: hp(2),
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
