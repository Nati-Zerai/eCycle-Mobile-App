import { View, Text, ScrollView } from 'react-native';
import React from 'react';
import CategoryCard from './CategoryCard';
import { ArrowRightIcon } from 'react-native-heroicons/solid';

const Categories = () => {
  return (
    <View>
        <View className="flex-row items-center justify-between px-4">
            <Text className="font-medium text-lg">Top Contributors</Text>
            <ArrowRightIcon color="#5cab44"/>
        </View>
    <ScrollView
    contentContainerStyle={{
        paddingHorizontal: 15,
        paddingTop: 10,
    }}
    horizontal
    showsHorizontalScrollIndicator={false}
    >
    {/* Category Card */}
    <CategoryCard imgUrl="https://cdn-icons-png.flaticon.com/512/180/180658.png" title="George"/>
    <CategoryCard imgUrl="https://cdn-icons-png.flaticon.com/512/3006/3006872.png" title="Jerry"/>
    <CategoryCard imgUrl="https://cdn-icons-png.flaticon.com/512/921/921110.png" title="Floyd"/>
    <CategoryCard imgUrl="https://cdn-icons-png.flaticon.com/512/180/180658.png" title="George"/>
    <CategoryCard imgUrl="https://cdn-icons-png.flaticon.com/512/3006/3006872.png" title="Jerry"/>
    <CategoryCard imgUrl="https://cdn-icons-png.flaticon.com/512/921/921110.png" title="Floyd"/>
    <CategoryCard imgUrl="https://cdn-icons-png.flaticon.com/512/180/180658.png" title="George"/>
    <CategoryCard imgUrl="https://cdn-icons-png.flaticon.com/512/3006/3006872.png" title="Jerry"/>
    <CategoryCard imgUrl="https://cdn-icons-png.flaticon.com/512/921/921110.png" title="Floyd"/>

    </ScrollView>
    </View>

  )
}

export default Categories;