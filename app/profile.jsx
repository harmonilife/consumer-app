// app/profile.jsx

import React from 'react';
import { StyleSheet, Text, View, Image, Pressable, ScrollView } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { useRouter } from 'expo-router';
import ScreenWrapper from '../components/ScreenWrapper';
import Icon from '../assets/icons/Index';
import { theme } from '../constants/theme';
import { hp, wp } from '../helpers/common';
import { userProfile } from '../constants';
import HorizontalSection from '../components/HorizontalSection'; // Import the new component

const Profile = () => {
  const router = useRouter();

  const toggleMode = () => {
    // Placeholder function for mode toggle
    // Implementation will be added in the next prompt
    console.log('Toggle mode button pressed');
  };

  // Handler functions for new sections
  const navigateToAccountSettings = () => {
    // Placeholder: Implement navigation to Account Settings screen
    console.log('Navigate to Account Settings');
    // router.push('/accountSettings'); // Uncomment when the screen is available
  };

  const navigateToReferrals = () => {
    // Placeholder: Implement navigation to Referrals screen
    console.log('Navigate to Referrals');
    // router.push('/referrals'); // Uncomment when the screen is available
  };

  const navigateToCustomerCare = () => {
    // Placeholder: Implement navigation to Customer Care screen
    console.log('Navigate to Customer Care');
    // router.push('/customerCare'); // Uncomment when the screen is available
  };

  return (
    <ScreenWrapper>
      <StatusBar style="dark" />
      <ScrollView contentContainerStyle={styles.container}>
        {/* Header with Mode Toggle Button */}
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Profile</Text>
          <Pressable onPress={toggleMode} style={styles.modeToggleButton}>
            <Icon name="moon" size={24} color={theme.colors.text} />
          </Pressable>
        </View>

        {/* Profile Photo */}
        <View style={styles.profileImageContainer}>
          <Image
            source={userProfile.profileImage}
            style={styles.profileImage}
          />
        </View>

        {/* User Details */}
        <Text style={styles.userName}>{userProfile.name}</Text>
        <Text style={styles.userEmail}>{userProfile.email}</Text>

        {/* Divider
        <View style={styles.divider} /> */}

        {/* Horizontal Sections */}
        <View style={styles.sectionsContainer}>
          <HorizontalSection
            iconName="settings"
            label="Account Settings"
            subLabels={['Notifications', 'Contact Details', 'Payments']}
            onPress={navigateToAccountSettings}
          />
          <HorizontalSection
            iconName="gift"
            label="Referrals"
            subLabels={['Reffer a friend', 'My Refferals']}
            onPress={navigateToReferrals}
          />
          <HorizontalSection
            iconName="user"
            label="Customer Care"
            subLabels={['Tickets', 'FAQs']}
            onPress={navigateToCustomerCare}
          />
        </View>

        {/* Version Text */}
        <Text style={styles.versionText}>v0.0.1</Text>
      </ScrollView>
    </ScreenWrapper>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: 'center',
    paddingHorizontal: wp(0),
    paddingTop: hp(0),
    paddingBottom: hp(5), // Extra padding for content
  },
  header: {
    width: '100%',
    flexDirection: 'row',
    paddingHorizontal: wp(3),
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: hp(3),
  },
  headerTitle: {
    fontSize: hp(3),
    fontWeight: theme.fonts.semiBold,
    color: theme.colors.text,
  },
  modeToggleButton: {
    padding: 10,
    borderRadius: 10,
  },
  profileImageContainer: {
    width: wp(30),
    height: wp(30),
    borderRadius: wp(15),
    overflow: 'hidden',
    marginBottom: hp(2),
    borderWidth: 2,
    borderColor: theme.colors.primary,
  },
  profileImage: {
    width: '100%',
    height: '100%',
  },
  userName: {
    fontSize: hp(2.5),
    fontWeight: theme.fonts.bold,
    color: theme.colors.textDark,
    marginBottom: hp(0.25),
    textAlign: 'center',
  },
  userEmail: {
    fontSize: hp(2),
    color: theme.colors.textLight,
    textAlign: 'center',
    marginBottom: hp(5),
  },
  divider: {
    width: '100%',
    height: 1,
    backgroundColor: theme.colors.darkLight,
    marginVertical: hp(3),
  },
  sectionsContainer: {
    width: '100%',
  },
  versionText: {
    fontSize: hp(1.6),
    color: theme.colors.textLight,
    textAlign: 'center',
    marginTop: hp(20),
  },
});
