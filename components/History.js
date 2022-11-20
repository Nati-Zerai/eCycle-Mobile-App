import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import {
  ChevronDownIcon,
  HeartIcon,
  ShoppingCartIcon,
  TrashIcon,
} from "react-native-heroicons/outline";
import { useNavigation } from "@react-navigation/native";
import { urlFor } from "../sanity";

const History = ({
  id,
  imgUrl,
  title,
  genre,
  amount,
  short_description,
  estimateTotal,
}) => {
  const navigation = useNavigation();

  return (
    <View>
      <View className="bg-white border border-gray-300">
        <View className="flex-row">
          <Image
            source={{
              uri: urlFor(imgUrl).url(),
            }}
            className="h-20 w-20 self-center bg-gray-300 p-4 ml-6 rounded-full"
          />
          <View className="flex flex-1 pl-6 py-4">
            <Text className="text-xs text-gray-600">{genre}</Text>
            <Text className="font-bold text-lg">{title}</Text>
            <Text className="text-sm">{short_description}</Text>
            <Text className="text-lg  text-black">{estimateTotal} points</Text>
          </View>
        </View>
        <View className="flex-row justify-center">
          <TouchableOpacity
            onPress={() => navigation.navigate("Action")}
            className="flex-row px-2 border rounded-xl mb-3 ml-6
              items-center"
          >
            <ShoppingCartIcon size={20} color="#5cab44" />
            <Text className="p-1">Order again</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default History;
