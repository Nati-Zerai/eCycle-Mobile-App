import { View, Text, Image, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import {
  ChevronDownIcon,
  HeartIcon,
  MinusCircleIcon,
  PlusCircleIcon,
  TrashIcon,
} from "react-native-heroicons/outline";
import { useDispatch, useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import {
  changeCartAmount,
  removeFromCart,
  selectCartItems,
  selectCartItemsWithId,
} from "../features/cartSlice";

const CartItems = ({
  id,
  imgUrl,
  title,
  genre,
  amount,
  short_description,
  estimateTotal,
}) => {
  const navigation = useNavigation();

  //redux
  const dispatch = useDispatch();
  const items = useSelector(selectCartItems);
  const itemWithId = useSelector((state) => selectCartItemsWithId(state, id));
  const removeItemFromCart = () => {
    if (!items.length > 0) return;
    dispatch(removeFromCart({ id }));
  };
  const changeItemCartAmount = () => {
    if (!items.length > 0) return;
    dispatch(changeCartAmount({ id }));
  };

  // useEffect(() => {
  //   dispatch(
  //     changeCartAmount({
  //       id,
  //       amountX,
  //     })
  //   );
  // }, [dispatch]);
  //  number plus minus
  let [amountX, setAmountX] = useState(amount);
  // console.log("************************************");
  // console.log(items.amount);
  // console.log(amount);
  // console.log(items);

  // console.log("************************************");

  return (
    <View>
      <View className="bg-white border border-gray-300">
        <View className="flex-row">
          <Image
            source={{
              uri: imgUrl,
            }}
            className="h-24 w-24 self-center bg-gray-300 p-4 ml-6 rounded-full"
          />
          <View className="flex flex-1 px-8 py-4">
            <Text className="text-xs text-gray-600">{genre}</Text>
            <Text className="font-bold text-lg">{title}</Text>
            <Text className="text-sm">{short_description}</Text>
            <Text className="text-lg text-black">{estimateTotal} points</Text>
          </View>
        </View>
        <View>
          <View className="flex-row">
            {/* Plus / Minus */}
            <View className="bg-white px-4">
              <View className="flex-row items-center space-x-2 pb-3">
                <TouchableOpacity
                  disabled={amountX <= 1}
                  onPress={() => setAmountX((amountX -= 1))}
                  onPressOut={changeItemCartAmount}
                >
                  <MinusCircleIcon
                    size={40}
                    color={amountX <= 1 ? "gray" : "#7cc464"}
                  />
                </TouchableOpacity>
                <Text> {amountX} </Text>
                <TouchableOpacity
                  onPress={() => setAmountX((amountX += 1))}
                  onPressOut={changeItemCartAmount}
                >
                  <PlusCircleIcon size={40} color="#7cc464" />
                </TouchableOpacity>
              </View>
            </View>
            {/* //// */}
            <TouchableOpacity className="flex-row px-2 rounded-xl mb-3 ml-6 items-center">
              <Text className="p-0.5 text-[#5cab44]">x</Text>
              <Text className="p-0.5">{amountX}</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={removeItemFromCart}
              className="flex-row px-2 border rounded-xl mb-3 ml-6 items-center"
            >
              <TrashIcon size={20} color="#5cab44" />
              <Text className="p-1">Remove</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default CartItems;
