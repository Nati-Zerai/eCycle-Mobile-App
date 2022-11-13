import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import { ArrowRightCircleIcon } from "react-native-heroicons/solid";
import { useNavigation } from "@react-navigation/native";

const ButtonsHome = ({ title, img }) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate("Action");
      }}
      className="flex-row bg-[#7cc464] mx-4 mt-4 p-2 px-4 rounded-xl"
    >
      <View className="flex-row flex-1">
        <Image
          source={{
            uri: img,
          }}
          className="h-16 w-16 rounded-lg"
        />
        <Text className="font-bold text-2xl text-white ml-4 mt-3 ">
          {title}
        </Text>
      </View>
      <View className="mt-2">
        <ArrowRightCircleIcon size={50} color="black" />
      </View>
    </TouchableOpacity>
  );
};

export default ButtonsHome;
