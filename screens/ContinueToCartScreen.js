import { View, Text, TouchableOpacity, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { XCircleIcon } from "react-native-heroicons/solid";
import { ShoppingCartIcon } from "react-native-heroicons/outline";

const ContinueToCartScreen = () => {
  const navigation = useNavigation();

  return (
    <View className="absolute bottom-0 h-52 w-full flex-1 ">
      <View className="flex-1 bg-gray-100 rounded-t-3xl">
        <View className="px-5 py-4 border-b border-[#7cc464] rounded-t-3xl shadow-xs">
          <View>
            <Text className="text-2xl font-bold text-center">
              Continue To Cart?
            </Text>
            <Text className="text-center text-gray-400">Auto Computation</Text>
          </View>
          <TouchableOpacity
            onPress={navigation.goBack}
            className="rounded-full bg-gray-200 absolute top-3 right-5"
          >
            <XCircleIcon color="#7cc464" height={50} width={50} />
          </TouchableOpacity>
        </View>

        <View className="flex-row items-center justify-between p-5 my-2 bg-white ">
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("Action");
            }}
            className="rounded-2xl bg-[#7cc464] p-4 ml-8"
          >
            <Text className="text-center text-white text-lg font-bold">
              Add more items
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              navigation.navigate("Cart");
            }}
            className="flex-row items-center space-x-2 rounded-2xl bg-[#7cc464] p-4 mr-8"
          >
            <ShoppingCartIcon size={30} color="white" />
            <Text className="text-center text-white text-lg font-bold">
              Cart
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default ContinueToCartScreen;
