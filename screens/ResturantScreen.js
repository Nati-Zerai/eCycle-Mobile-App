import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import { ArrowLeftIcon, ChevronRightIcon, MapPinIcon, QuestionMarkCircleIcon, StarIcon } from 'react-native-heroicons/outline';
import DishRow from '../components/DishRow';

const ResturantScreen = () => {
  
    const navigation = useNavigation();

    const {params:{
        id,
        imgUrl,
        title,
        rating,
        genre,
        address,
        short_description,
        long,
        lat,    
    }} = useRoute();
  
    return (
    <ScrollView>
        <View className="relative">
            <Image 
                source={{
                    uri: imgUrl,
                }}
                className="w-full h-56 bg-gray-500 p-5"
            />
        </View>
        <TouchableOpacity onPress={navigation.goBack} className="absolute top-14 left-5 p-2 bg-gray-100 rounded-full">
            <ArrowLeftIcon size={20} color="#00CCBB"/>
        </TouchableOpacity>
        
        <View className="bg-white">
            <View className="px-4 pt-4">
                <Text className="font-bold text-3xl">{title}</Text>
            <View className="flex-row space-x-2 my-1 mb-2">
            <View className="flex-row items-center space-x-1">
                <StarIcon color="green" opacity={0.5} size={22} />
                <Text className="text-xs text-gray-500">
                <Text className="text-green-500">{rating}</Text> - {genre}
                </Text> 
            </View>
            <View className="flex-row items-center space-x-1">
                <MapPinIcon color="gray" opacity={0.4} size={22}/>
                <Text className="text-xs text-gray-500">Neaby - {address}</Text>
            </View>
            </View>
            <View>
                <Text className="text-xs text-gray-500 mt-1 pb-3">{short_description}</Text>
            </View>
            </View>
            <TouchableOpacity className="flex-row items-center space-x-2 p-4 border-y border-gray-300">
                <QuestionMarkCircleIcon size={20} opacity={0.6} color="gray" />
                <Text className="flex-1">Have a food allergy?</Text>
                <ChevronRightIcon size={20} color="#00CCBB"/>
            </TouchableOpacity>
        </View>

        <View>
            <Text className="px-4 pt-6 mb-3 font-bold text-xl">Menu</Text>

            {/* DishRows */}
            <DishRow 
                id={1}
                name="Pizza"
                description="Open the app on your device, reveal the developer menu."
                price={300}
                image="https://links.papareact.com/gn7"
            />
            <DishRow 
                id={2}
                name="Pizza"
                description="Open the app on your device, reveal the developer menu."
                price={300}
                image="https://links.papareact.com/gn7"
            />
            <DishRow 
                id={3}
                name="Pizza"
                description="Open the app on your device, reveal the developer menu."
                price={300}
                image="https://links.papareact.com/gn7"
            />

        </View>

    </ScrollView>
  )
}

export default ResturantScreen;