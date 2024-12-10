// components/HomeCategories.jsx

import React from 'react';
import { FlatList, StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { hp, wp } from '../helpers/common';
import { homeCategories } from '../constants';
import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from 'expo-router';
import { theme } from '../constants/theme';

const HomeCategories = () => {
  const router = useRouter();
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Categories</Text>

      <FlatList
        data={homeCategories}
        numColumns={2}
        keyExtractor={(item) => item.name}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 50, paddingTop: 20 }}
        columnWrapperStyle={{
          justifyContent: 'space-between',
        }}
        renderItem={({ item }) => <CategoryCard router={router} item={item} />}
      />
    </View>
  );
};

const CategoryCard = ({ item, router }) => {
  return (
    <TouchableOpacity
      onPress={() => router.push({ pathname: 'category', params: { categoryName: item.name } })}
      style={styles.card}
    >
      <Image
        source={item.image}
        resizeMode="cover"
        style={styles.image}
      />

      <LinearGradient
        colors={['transparent', 'rgba(0,0,0,0.9)']}
        style={styles.gradient}
        start={{ x: 0.5, y: 0 }}
        end={{ x: 0.5, y: 1 }}
      />

      <Text style={styles.categoryName}>
        {item.name}
      </Text>
    </TouchableOpacity>
  );
};

export default HomeCategories;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: wp(4),
  },
  title: {
    fontSize: hp(3),
    fontWeight: theme.fonts.semiBold,
    color: theme.colors.text,
  },
  card: {
    width: wp(44),
    height: hp(12),
    marginBottom: hp(2),
    borderRadius: 15,
    overflow: 'hidden',
    justifyContent: 'center'
  },
  image: {
    width: '100%',
    height: '100%',
    position: 'absolute',
  },
  gradient: {
    width: '100%',
    height: hp(15),
    position: 'absolute',
    bottom: 0,
  },
  categoryName: {
    fontSize: hp(2.3),
    color: 'white',
    fontWeight: theme.fonts.semiBold,
    textAlign: 'center',
    marginBottom: hp(1),
  },
});
