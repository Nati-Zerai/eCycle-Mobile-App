import React from 'react';
import { View, Text, Image, TextInput, ScrollView, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context'
import { UserIcon, ChevronDownIcon } from "react-native-heroicons/outline"
import { ArrowRightCircleIcon, MapPinIcon } from 'react-native-heroicons/solid';
import Categories from '../components/Categories';
import FeaturedRow from '../components/FeaturedRow';

const HomeScreen = () => {
  return (
    <View className="mb-40">
        <View className="bg-[#84b06c] pt-12 flex-row pb-3 items-center space-x-2 px-4">
            <Image source={{
                uri: "https://tunza.eco-generation.org/file/e-waste%20recycling%20logo.jpg",
            }}
            className="h-10 w-10 bg-gray-300 p-4 rounded-full"
            />
            <View className="flex-1">
            <Text className="font-bold  text-white text-2xl mr-2">
            eCycle
            </Text>            
            </View>
            <UserIcon size={30} color="#ffffff"/>
        </View>
        {/* Pick Up */}
            <TouchableOpacity className="bg-white mx-5 my-2 p-2 rounded-3xl">
                <View className="flex-row items-center space-x-2 px-2">
                    <MapPinIcon color="gray" opacity={0.4} size={22}/>
                    <View className="flex-1">
                        <Text className="text-xs" >Pick Up From:</Text>
                        <Text className=" text-md mr-2">Zayed University, Abu Dhabi</Text>
                    </View>
                    <View>
                        <ChevronDownIcon size={25} color="#5cab44"/>          
                    </View>
                </View>
            </TouchableOpacity>

        {/* Body */}
        <ScrollView>
            {/* Categories */}
            <Categories />

            {/* 3 Bottons */}
            <View className="bg-white mx-6 my-5 pb-4 rounded-lg">
            <TouchableOpacity className="flex-row bg-[#84b06c] mx-4 mt-4 p-2 px-4 rounded-xl">
                <View className="flex-row flex-1">
                <Image 
                    source={{
                        uri: "https://cdn-icons-png.flaticon.com/512/3427/3427863.png",
                    }}
                    className="h-16 w-16 rounded-lg"
                />
                <Text className="font-bold text-2xl text-white ml-4 mt-3 ">Recycle</Text>
                </View>
                <View className="mt-2">
                    <ArrowRightCircleIcon size={50} color="black" />
                </View>
            </TouchableOpacity>

            <TouchableOpacity className="flex-row bg-[#84b06c] mx-4 mt-4 p-2 px-4 rounded-xl">
                <View className="flex-row flex-1">
                <Image 
                    source={{
                        uri: "https://cdn-icons-png.flaticon.com/512/4275/4275122.png",
                    }}
                    className="h-16 w-16 rounded-lg"
                />
                <Text className="font-bold text-2xl text-white ml-4 mt-3 ">Repair</Text>
                </View>
                <View className="mt-3">
                    <ArrowRightCircleIcon size={50} color="black" />
                </View>
            </TouchableOpacity>

            <TouchableOpacity className="flex-row bg-[#84b06c] mx-4 mt-4 p-2 px-4 rounded-xl">
                <View className="flex-row flex-1">
                <Image 
                    source={{
                        uri: "https://cdn-icons-png.flaticon.com/512/3038/3038243.png",
                    }}
                    className="h-16 w-16 rounded-lg"
                />
                <Text className="font-bold text-2xl text-white ml-4 mt-3 ">Donate</Text>
                </View>
                <View className="mt-2">
                    <ArrowRightCircleIcon size={50} color="black" />
                </View>
            </TouchableOpacity>
            </View>


        {/* FeaturedRow */}
        <FeaturedRow 
            id={12}
            title="Daily Updates"
            description="Recent news and information related to electronic waste"
            featuredCategory="featured"
        />
        <FeaturedRow 
            id={12}
            title="Daily Updates"
            description="Recent news and information related to electronic waste"
            featuredCategory="featured"
        />
        <FeaturedRow 
            id={12}
            title="Daily Updates"
            description="Recent news and information related to electronic waste"
            featuredCategory="featured"
        />

        </ScrollView>
    </View>
  )
}

export default HomeScreen;