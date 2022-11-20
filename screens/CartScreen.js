import { View, Text, TouchableOpacity, Image, ScrollView } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { ArrowRightIcon, UserIcon } from "react-native-heroicons/solid";
import CartItems from "../components/CartItems";
import History from "../components/History";
import { ShoppingCartIcon } from "react-native-heroicons/outline";
import { useDispatch, useSelector } from "react-redux";
import { selectCartItems } from "../features/cartSlice";
import { selectHistoryItems } from "../features/historySlice";

const CartScreen = () => {
  const navigation = useNavigation();
  // Redux
  const itemsCart = useSelector(selectCartItems);
  const historyItems = useSelector(selectHistoryItems);
  const dispatch = useDispatch();

  return (
    <>
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
        <ScrollView className="mb-20">
          {/* Track button */}
          <View className="p-5 bg-white space-y-4">
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("Track");
              }}
              className="rounded-2xl bg-white border-2  border-lime-500 p-4 mx-3"
            >
              <Text className="text-center text-[#7cc464] text-xl font-semibold">
                Track pickup
              </Text>
            </TouchableOpacity>
          </View>

          <Text className="font-semibold text-2xl mt-6 pb-2 px-2">Cart</Text>
          {/* When Cart is empty */}
          <View>
            {itemsCart.length <= 0 ? (
              <View className="flex-row items-center justify-center p-6 border bg-white rounded-xl">
                <ShoppingCartIcon size={55} color="#7cc464" />
                <View className="px-8 py-4">
                  <Text className="font-bold text-2xl">Your Cart is empty</Text>
                  <Text className="text-sm text-gray-400">
                    see recommendations
                  </Text>
                </View>
              </View>
            ) : null}
          </View>

          {Object.entries(itemsCart).map(([key, items]) => (
            <View key={key}>
              <CartItems
                id={items.id}
                imgUrl={items.imgUrl}
                genre={items.genre}
                title={items.title}
                short_description={items.short_description}
                amount={items.amount}
                estimateTotal={items.estimateTotal}
              />
            </View>
          ))}

          {/* History */}
          <Text className="font-semibold text-2xl mt-6 pb-2 px-2">History</Text>
          {Object.entries(historyItems).map(([key, items]) => (
            <View key={key} className="bg-white">
              <History
                id={items.id}
                imgUrl={items.imgUrl}
                genre={items.genre}
                title={items.title}
                short_description={items.short_description}
                amount={items.amount}
                estimateTotal={items.estimateTotal}
              />
            </View>
          ))}
        </ScrollView>
        <View className="absolute bottom-0 flex w-full bg-gray-50">
          <TouchableOpacity
            disabled={itemsCart.length <= 0}
            onPress={() => {
              navigation.navigate("Checkout");
            }}
            className={
              itemsCart.length <= 0
                ? "items-center bg-gray-300 px-2 py-3 rounded-xl mx-4 my-3 "
                : "items-center bg-[#7cc464] px-2 py-3 rounded-xl mx-4 my-3 "
            }
          >
            <Text className="font-semibold text-xl text-white ">CHECKOUT</Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};

export default CartScreen;
