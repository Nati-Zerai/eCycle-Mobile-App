import {
  View,
  Text,
  TouchableOpacity,
  Image,
  Touchable,
  ScrollView,
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { ArrowRightIcon, UserIcon } from "react-native-heroicons/solid";
import CartItems from "../components/CartItems";
import Wishlist from "../components/Wishlist";
import { ShoppingCartIcon } from "react-native-heroicons/outline";

const CartScreen = () => {
  const navigation = useNavigation();

  return (
    <View className="h-full relative flex">
      {/* Header text with logo */}
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
        <TouchableOpacity onPress={() => navigation.navigate("UserProfile")}>
          <UserIcon size={30} color="#ffffff" />
        </TouchableOpacity>
      </View>
      {/* Main */}
      <ScrollView>
        {/* When Cart is empty */}
        {/* <View className="flex-row items-center p-6 bg-white rounded-xl">
            <ShoppingCartIcon size={55} color="#7cc464"/>
            <View className="flex flex-1 px-8 py-4">
                <Text className="font-bold text-lg">Your Cart is empty</Text>
                <Text className="text-sm text-blue-500">see recommendations</Text>
            </View>
        </View> */}
        <Text className="font-semibold text-2xl mt-6 pb-2 px-2">Cart</Text>

        <CartItems
          imgUrl="https://cdn1.iconfinder.com/data/icons/bokbokstars-121-classic-stock-icons-1/512/person-man.png"
          brand="Apple"
          name="Aymen"
          description="Officia fugiat nulla tempor consectetur id amet aliquip quis laboris cillum irure qui."
          price={34}
        />
        <CartItems
          imgUrl="https://cdn1.iconfinder.com/data/icons/bokbokstars-121-classic-stock-icons-1/512/person-man.png"
          brand="Apple"
          name="Aymen"
          description="Officia fugiat nulla tempor consectetur id amet aliquip quis laboris cillum irure qui."
          price={34}
        />
        <TouchableOpacity></TouchableOpacity>
        {/* History */}
        <Text className="font-semibold text-2xl mt-6 pb-2 px-2">Wishlist</Text>
        <View className="bg-white">
          <Wishlist
            imgUrl="https://cdn1.iconfinder.com/data/icons/bokbokstars-121-classic-stock-icons-1/512/person-man.png"
            brand="Apple"
            name="Aymen"
            description="Officia fugiat nulla tempor consectetur id amet aliquip quis laboris cillum irure qui."
            price={34}
          />
          <Wishlist
            imgUrl="https://cdn1.iconfinder.com/data/icons/bokbokstars-121-classic-stock-icons-1/512/person-man.png"
            brand="Apple"
            name="Aymen"
            description="Officia fugiat nulla tempor consectetur id amet aliquip quis laboris cillum irure qui."
            price={34}
          />
        </View>
      </ScrollView>
      <View className="absolute bottom-0 flex w-full bg-gray-50">
        <View className="items-center bg-[#7cc464] px-2 py-3 rounded-xl mx-4 my-3 ">
          <Text className="font-bold text-xl ">CHECKOUT</Text>
        </View>
      </View>
    </View>
  );
};

export default CartScreen;
