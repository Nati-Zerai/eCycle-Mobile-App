import React from "react";
import { View, Text, ScrollView, Image, TouchableOpacity } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import {
  ArrowLeftIcon,
  ChevronRightIcon,
  QuestionMarkCircleIcon,
} from "react-native-heroicons/outline";
import { CalendarDaysIcon, MapPinIcon } from "react-native-heroicons/solid";
const UpdatesScreen = () => {
  const navigation = useNavigation();
  const {
    params: {
      id,
      imgUrl,
      title,
      rating,
      genre,
      address,
      short_description,
      long,
      lat,
    },
  } = useRoute();

  return (
    <View>
      <View className="relative">
        <Image
          source={{
            uri: imgUrl,
          }}
          className="w-full h-56 bg-gray-500 p-5"
        />
      </View>
      <TouchableOpacity
        onPress={navigation.goBack}
        className="absolute top-14 left-5 p-2 bg-gray-100 rounded-full"
      >
        <ArrowLeftIcon size={20} color="#00CCBB" />
      </TouchableOpacity>

      <View className="bg-white">
        <View className="px-4 pt-4">
          <Text className="font-bold text-3xl">{title}</Text>
          <View className="flex-row space-x-2 my-1 mb-2">
            <View className="flex-row items-center space-x-1">
              <CalendarDaysIcon color="green" opacity={0.5} size={22} />
              <Text className="text-xs text-gray-500">
                <Text className="">{rating}</Text> - {genre}
              </Text>
            </View>
            <View className="flex-row items-center space-x-1">
              <MapPinIcon color="black" opacity={0.4} size={22} />
              <Text className="">{address}</Text>
            </View>
          </View>
        </View>
        <TouchableOpacity className="flex-row items-center space-x-2 p-4 border-y border-gray-300">
          <QuestionMarkCircleIcon size={20} opacity={0.6} color="gray" />
          <Text className="flex-1">Want some help?</Text>
          <ChevronRightIcon size={20} color="#00CCBB" />
        </TouchableOpacity>
        <ScrollView>
          <Text className="my-2 mx-4 pb-3 text-base">{short_description}</Text>
          <Text className="my-2 mx-4 pb-3 text-base">{short_description}</Text>
          <Text className="my-2 mx-4 pb-3 text-base">{short_description}</Text>
        </ScrollView>
      </View>
    </View>
  );
};

export default UpdatesScreen;
