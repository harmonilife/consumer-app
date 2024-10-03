import { FlatList, StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { hp, wp } from '../helpers/common'
import { homeCategories } from '../constants'
import { TouchableOpacity } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'

const HomeCategories = () => {
  return (
    <View className='mx-4'>
      <Text style={{fontSize: hp(3)}} className='font-semibold text-neutral-700' >
        Categories
      </Text>

      <FlatList 
        data={homeCategories}
        numColumns={2}
        keyExtractor={item => item.name}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{paddingBottom: 50, paddingTop: 20}}
        columnWrapperStyle={{
            justifyContent: 'space-between'
        }}
        renderItem={({item, index}) => <CategoryCard index={index} item={item} />}
      />
    </View>
  )
}

const CategoryCard = ({item, index}) => {
    return (
        <View>
            <TouchableOpacity
                style={{width: wp(44), height: hp(22)}}
                className='flex justify-end p-4 mb-4'>
                   <Image 
                        source={item.image}
                        resizeMode='cover'
                        style={{width: wp(44), height: hp(22)}}
                        className='rounded-[35px] absolute'
                    />

                    <LinearGradient
                        colors={['transparent', 'rgba(0,0,0,0.9)']}
                        style={{width: wp(44), height: hp(15)}}
                        start={{x: 0.5, y: 0}}
                        end={{x: 0.5, y:1}}
                        className="absolute bottom-0 rounded-b-[35px]"
                    />

                    <Text
                        style={{fontSize: hp(2.3)}}
                        className='text-white font-semibold text-center tracking-wide'
                    >
                        {item?.name}
                    </Text>
                
            </TouchableOpacity>
        </View>
    )
}

export default HomeCategories

const styles = StyleSheet.create({})