import React from 'react';
import { View, Text, Image, TextInput, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context'
import {
    UserIcon,
    ChevronDownIcon,
    MagnifyingGlassIcon, 
    AdjustmentsVerticalIcon,
} from "react-native-heroicons/outline"
import Categories from '../components/Categories';
import FeaturedRow from '../components/FeaturedRow';

const HomeScreen = () => {
  return (
    <SafeAreaView>
        <View className="bg-white pt-4 flex-row pb-3 items-center space-x-2 px-4">
            <Image source={{
                uri: "https://links.papareact.com/wru",
            }}
            className="h-7 w-7 bg-gray-300 p-4 rounded-full"
            />
            <View className="flex-1">
            <Text className="font-bold text-gray-400 text-xs" >Deliver Now!</Text>
            <Text className="font-bold text-xl">
            Current Location 
            <ChevronDownIcon size={20} color="#00CCBB"/>
            </Text>            
            </View>
            <UserIcon size={35} color="#00CCBB"/>
        </View>

        {/* Search */}
        <View className="bg-white flex-row space-x-2 items-center pb-2 px-4">
            <View className="flex-row space-x-2 flex-1 bg-gray-200 p-3">
                <MagnifyingGlassIcon size={20} color="#00CCBB" />
                <TextInput 
                    placeholder='Resturants and ...' 
                    keyboardType='default'
                    />
            </View>
            <AdjustmentsVerticalIcon size={20} color="#00CCBB" />
        </View>

        {/* Body */}
        <ScrollView>
            {/* Categories */}
            <Categories />

        {/* FeaturedRow */}
        <FeaturedRow 
            id={12}
            title="Featured"
            description="Paid placement from partners"
            featuredCategory="featured"
        />
        <FeaturedRow 
            id={123}
            title="Top Discount"
            description="Paid placement from partners"
            featuredCategory="featured"
        />
        <FeaturedRow
            id={1234} 
            title="Offers near you"
            description="Paid placement from partners"
            featuredCategory="featured"
        />

        </ScrollView>
    </SafeAreaView>
  )
}

export default HomeScreen;