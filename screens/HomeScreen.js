import React from "react";
import { View, Text, Image, ScrollView, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { UserIcon, ChevronDownIcon } from "react-native-heroicons/outline";
import { ArrowRightCircleIcon, MapPinIcon } from "react-native-heroicons/solid";
import Contributor from "../components/Contributor";
import UpdatesRow from "../components/UpdatesRow";
import ButtonsHome from "../components/ButtonsHome";

const HomeScreen = () => {
  return (
    <View className="mb-40">
      <View className="bg-[#7cc464] pt-12 flex-row pb-3 items-center space-x-2 px-4">
        <Image
          source={{
            uri: "https://tunza.eco-generation.org/file/e-waste%20recycling%20logo.jpg",
          }}
          className="h-10 w-10 bg-gray-300 p-4 rounded-full"
        />
        <View className="flex-1">
          <Text className="font-bold text-white text-2xl mr-2">eCycle</Text>
        </View>
        <UserIcon size={30} color="#ffffff" />
      </View>
      {/* Pick Up */}
      <TouchableOpacity className="bg-white mx-5 my-2 p-2 rounded-3xl">
        <View className="flex-row items-center space-x-2 px-2">
          <MapPinIcon color="black" opacity={0.4} size={22} />
          <View className="flex-1">
            <Text className="text-xs">Pick Up From:</Text>
            <Text className=" text-md mr-2">Zayed University, Abu Dhabi</Text>
          </View>
          <View>
            <ChevronDownIcon size={25} color="#5cab44" />
          </View>
        </View>
      </TouchableOpacity>

      {/* Body */}
      <ScrollView>
        {/* Categories */}
        <Contributor />

        {/* 3 Bottons */}
        <View className="bg-white mx-6 my-5 pb-4 rounded-lg">
          <ButtonsHome
            img="https://cdn-icons-png.flaticon.com/512/3427/3427863.png"
            title="Recycle"
          />
          <ButtonsHome
            img="https://cdn-icons-png.flaticon.com/512/4275/4275122.png"
            title="Repair"
          />
          <ButtonsHome
            img="https://cdn-icons-png.flaticon.com/512/3038/3038243.png"
            title="Donate"
          />
        </View>

        {/* Updates Row */}
        <UpdatesRow
          id={12}
          title="Daily Updates"
          description="Recent news and information related to electronic waste"
          featuredCategory="featured"
        />
        <UpdatesRow
          id={12}
          title="Daily Updates"
          description="Recent news and information related to electronic waste"
          featuredCategory="featured"
        />
      </ScrollView>
    </View>
  );
};

export default HomeScreen;
