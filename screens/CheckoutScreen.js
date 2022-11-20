import { View, Text, TouchableOpacity, Image, ScrollView } from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { XCircleIcon } from "react-native-heroicons/solid";
import Currency from "react-currency-formatter";
import { useDispatch, useSelector } from "react-redux";
import {
  removeFromCart,
  selectCartItems,
  selectCartPointsTotal,
} from "../features/cartSlice";
import { addToHistory, selectHistoryItems } from "../features/historySlice";

const CheckoutScreen = () => {
  const navigation = useNavigation();
  // Redux
  const items = useSelector(selectCartItems);
  const cartPointsTotal = useSelector(selectCartPointsTotal);
  const historyItems = useSelector(selectHistoryItems);
  const dispatch = useDispatch();

  const addItemToHistory = () => {
    if (!items.length > 0) return;
    items.map((item) => dispatch(addToHistory(item)));
  };
  // console.log("Cart Items====================================");
  // console.log(items);
  // console.log("History Items----------------------");
  // console.log(historyItems);

  return (
    <View className="flex-1 bg-white ">
      <View className="flex-1 bg-gray-100">
        <View className="p-5 border-b border-[#7cc464] bg-white shadow-xs">
          <View>
            <Text className="text-lg font-bold text-center">Basket</Text>
            <Text className="text-center text-gray-400">
              Details and Payment
            </Text>
          </View>
          <TouchableOpacity
            onPress={navigation.goBack}
            className="rounded-full bg-gray-100 absolute top-3 right-5"
          >
            <XCircleIcon color="#7cc464" height={50} width={50} />
          </TouchableOpacity>
        </View>
        <View className="flex-row items-center space-x-4 px-4 py-3 bg-white my-5">
          <Image
            source={{
              uri: "https://links.papareact.com/gn7",
            }}
            className="h-7 w-7 bg-gray-300 p-4 rounded-full"
          />
          <Text className="flex-1">Deliver in 50-75 min</Text>
          <TouchableOpacity>
            <Text className="text-[#7cc464]"> Change</Text>
          </TouchableOpacity>
        </View>
        <ScrollView className="divide-y divide-gray-200">
          {Object.entries(items).map(([key, item]) => (
            <View
              key={key}
              className="flex-row items-center space-x-3 bg-white py-2 px-5"
            >
              <Text className="text-[#7cc464]">{item.amount} x</Text>
              <Image
                source={{
                  uri: item.imgUrl,
                }}
                className="h-12 w-12 rounded-full"
              />
              <Text className="flex-1">{item.title}</Text>
              <Text className="text-gray-600">{item.estimateTotal} points</Text>
              <TouchableOpacity
                onPress={() => dispatch(removeFromCart({ id: item.id }))}
              >
                <Text className="text-[#7cc464] text-xs">Remove</Text>
              </TouchableOpacity>
            </View>
          ))}
        </ScrollView>

        <View className="p-5 bg-white mt-5 space-y-4">
          <View className="flex-row justify-between">
            <Text className="text-gray-400">Subtotal</Text>
            <Text className="text-gray-400">{cartPointsTotal} points</Text>
          </View>

          <View className="flex-row justify-between">
            <Text className="text-gray-400">Extra Points</Text>
            <Text className="text-gray-400">0 points</Text>
          </View>

          <View className="flex-row justify-between">
            <Text className="">Order Total</Text>
            <Text className="font-extrabold">{cartPointsTotal} points</Text>
          </View>
          <TouchableOpacity
            onPress={() => navigation.navigate("PreparingOrder")}
            onPressOut={addItemToHistory}
            className="rounded-lg bg-[#7cc464] p-4"
          >
            <Text className="text-center text-white text-lg font-bold">
              Place Order
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default CheckoutScreen;
