// components/HorizontalSection.jsx

import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Icon from '../assets/icons/Index';
import { hp, wp } from '../helpers/common';
import { theme } from '../constants/theme';

const HorizontalSection = ({ iconName, label, subLabels = [], onPress }) => {

    const formattedSubLabels = subLabels.join(' • ');

  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      {/* <Icon name={iconName} size={35} color={theme.colors.primary} /> */}
      <View style={styles.labelSection}>
        <Text style={styles.label}>{label}</Text>
        {subLabels.length > 0 && (
          <Text style={styles.subLabel}>{formattedSubLabels}</Text>
        )}
      </View>
    </TouchableOpacity>
  );
};

export default HorizontalSection;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: hp(2.2),
    paddingHorizontal: wp(0),
    // borderBottomWidth: 1,
    // borderBottomColor: theme.colors.darkLight,
    width: '100%',
  },
  labelSection: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
    marginLeft: wp(5),
  },
  subLabel: {
    
  },
  label: {
    fontSize: hp(2.3),
    color: theme.colors.dark,
    fontWeight: theme.fonts.semiBold,
  },
});
