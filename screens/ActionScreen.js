import {
  View,
  Text,
  Image,
  TextInput,
  SafeAreaView,
  ScrollView,
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import {
  ArrowRightIcon,
  MagnifyingGlassIcon,
  UserIcon,
} from "react-native-heroicons/outline";
import SearchFilter from "../components/SearchFilter";
import DevicesColumn from "../components/DevicesColumn";

const ActionScreen = () => {
  const navigation = useNavigation();

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
          <Text className="font-bold  text-white text-2xl mr-2">eCycle</Text>
        </View>
        <UserIcon size={30} color="#ffffff" />
      </View>

      {/* Search */}
      <View className="bg-white flex-row space-x-2 items-center py-2 px-4 ">
        <View className="flex-row space-x-2 flex-1 bg-gray-200 p-3 rounded-xl">
          <MagnifyingGlassIcon size={20} color="#7cc464" />
          <TextInput
            placeholder="Search Any Electronic Items ..."
            keyboardType="default"
          />
        </View>
      </View>

      {/* Body */}

      <SafeAreaView>
        {/* Search Filter */}
        <SearchFilter />
      </SafeAreaView>
      <ScrollView>
        <View className="flex-row items-center justify-between mt-1 px-4">
          <Text className="font-bold text-lg">Popular Devices</Text>
        </View>

        <DevicesColumn
          id={123}
          imgUrl="https://images.unsplash.com/photo-1603791239531-1dda55e194a6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YXBwbGUlMjBpcGhvbmV8ZW58MHx8MHx8&w=1000&q=80"
          title="Iphone 7 SE"
          rating={4.5}
          genre="Smartphone"
          short_description="This is short description about the device"
        />
        <DevicesColumn
          id={123}
          imgUrl="https://images.unsplash.com/photo-1603791239531-1dda55e194a6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YXBwbGUlMjBpcGhvbmV8ZW58MHx8MHx8&w=1000&q=80"
          title="Iphone 7 SE"
          rating={4.5}
          genre="Smartphone"
          short_description="This is short description about the device"
        />
        <DevicesColumn
          id={123}
          imgUrl="https://images.unsplash.com/photo-1603791239531-1dda55e194a6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YXBwbGUlMjBpcGhvbmV8ZW58MHx8MHx8&w=1000&q=80"
          title="Iphone 7 SE"
          rating={4.5}
          genre="Smartphone"
          short_description="This is short description about the device"
        />
      </ScrollView>

      <Text onPress={navigation.goBack}>samplePage</Text>
    </View>
  );
};

export default ActionScreen;
