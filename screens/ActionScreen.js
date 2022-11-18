import {
  View,
  Text,
  Image,
  TextInput,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import {
  ArrowRightIcon,
  MagnifyingGlassIcon,
  UserIcon,
} from "react-native-heroicons/outline";
import SearchFilter from "../components/SearchFilter";
import DevicesColumn from "../components/DevicesColumn";
import SearchFilterCard from "../components/SearchFilterCards";

const ActionScreen = () => {
  const navigation = useNavigation();
  const [selector, setSelector] = useState("Laptop")
  const [items, setitems] = useState([
    { key: "1", type: "Laptop", color: "white"},
    { key: "2", type: "Phone", color: "white"},
    { key: "3", type: "TV", color: "white"},
    { key: "4", type: "Toy", color: "white"},
  ])
  const [electronics, setelectronics] = useState([
    { 
      key: "121",
      imgUrl:"https://images.unsplash.com/photo-1603791239531-1dda55e194a6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YXBwbGUlMjBpcGhvbmV8ZW58MHx8MHx8&w=1000&q=80",    
      title: "Phone", 
      rating: "green", 
      genre: "Smartphone", 
      short_description: "This is short description about the device"},
    { 
      key: "122",
      imgUrl:"https://images.unsplash.com/photo-1603791239531-1dda55e194a6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YXBwbGUlMjBpcGhvbmV8ZW58MHx8MHx8&w=1000&q=80",    
      title: "Phone", 
      rating: "green", 
      genre: "Smartphone", 
      short_description: "This is short description about the device"},
    { 
      key: "123",
      imgUrl:"https://images.unsplash.com/photo-1603791239531-1dda55e194a6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YXBwbGUlMjBpcGhvbmV8ZW58MHx8MHx8&w=1000&q=80",    
      title: "Phone", 
      rating: "green", 
      genre: "Smartphone", 
      short_description: "This is short description about the device"},
    { 
      key: "124",
      imgUrl:"https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",    
      title: "Laptop", 
      rating: "green", 
      genre: "Smartphone", 
      short_description: "This is short description about the device"},
    { 
      key: "125",
      imgUrl:"https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",    
      title: "Laptop", 
      rating: "green", 
      genre: "Smartphone", 
      short_description: "This is short description about the device"},
    { 
      key: "126",
      imgUrl:"https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",    
      title: "Laptop", 
      rating: "green", 
      genre: "Smartphone", 
      short_description: "This is short description about the device"},
    { 
      key: "127",
      imgUrl:"https://images.unsplash.com/photo-1593305841991-05c297ba4575?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=757&q=80",    
      title: "TV", 
      rating: "green", 
      genre: "Smartphone", 
      short_description: "This is short description about the device"},
    { 
      key: "128",
      imgUrl:"https://images.unsplash.com/photo-1593305841991-05c297ba4575?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=757&q=80",    
      title: "TV", 
      rating: "green", 
      genre: "Smartphone", 
      short_description: "This is short description about the device"},
    { 
      key: "129",
      imgUrl:"https://images.unsplash.com/photo-1593305841991-05c297ba4575?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=757&q=80",    
      title: "TV", 
      rating: "green", 
      genre: "Smartphone", 
      short_description: "This is short description about the device"},
    { 
      key: "131",
      imgUrl:"https://images.unsplash.com/photo-1581235720704-06d3acfcb36f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80",    
      title: "Toy", 
      rating: "green", 
      genre: "Smartphone", 
      short_description: "This is short description about the device"},
    { 
      key: "132",
      imgUrl:"https://images.unsplash.com/photo-1581235720704-06d3acfcb36f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80",    
      title: "Toy", 
      rating: "green", 
      genre: "Smartphone", 
      short_description: "This is short description about the device"},
    { 
      key: "133",
      imgUrl:"https://images.unsplash.com/photo-1581235720704-06d3acfcb36f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80",    
      title: "Toy", 
      rating: "green", 
      genre: "Smartphone", 
      short_description: "This is short description about the device"},
  ])
  
  function hundlePress(item) {
    setSelector(item.type)
    item => {setitems({...prevValue, [item.color] : "green"})}

  }
  
  return (
    <>
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
        {/* <SearchFilter /> This works*/}
        <ScrollView
              contentContainerStyle={{
                paddingHorizontal: 15,
                paddingTop: 10,
              }}
              horizontal
              showsHorizontalScrollIndicator={false}>
        {items.map(item => (
          // onPress={() => setitems((prevValue) =>
          //   ({...prevValue, [items.color]: "green" )}>
          <TouchableOpacity
          onPress={() => hundlePress(item)}>
          <View key={item.key}>
              <SearchFilterCard key={item.key} title={item.type} color={item.color} selector={selector}/>
          </View>
          </TouchableOpacity>
        ))}

        </ScrollView>
      </SafeAreaView>
      <ScrollView>
        <View className="flex-row items-center justify-between mt-1 px-4">
          <Text className="font-bold text-lg">Popular Devices</Text>
        </View>
        {electronics.filter(electronic => electronic.title == selector).map(electronic => (
          <View key={electronic.key}>
          <DevicesColumn
          key={electronic.key}
          id={electronic.key}
          imgUrl={electronic.imgUrl}
          title={electronic.title}
          rating={electronics.rating}
          genre={electronic.genre}
          short_description={electronic.short_description}
        />
          </View>
        ))}
      </ScrollView>

    </View>
    </>);
};

export default ActionScreen;
