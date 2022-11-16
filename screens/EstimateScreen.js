import { View, Text, TouchableOpacity, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { XCircleIcon } from "react-native-heroicons/solid";
import Currency from "react-currency-formatter";

const EstimateScreen = () => {
  const navigation = useNavigation();

  return (
    <View className="absolute bottom-0 h-72 w-full flex-1 ">
      <View className="flex-1 bg-gray-100 rounded-t-3xl">
        <View className="px-5 py-4 border-b border-[#7cc464] rounded-t-3xl shadow-xs">
          <View>
            <Text className="text-2xl font-bold text-center">
              Estimated Price
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
        <View className="items-center space-x-1 py-2 bg-white my-2">
          <Text className="text-2xl font-bold text-[#7cc464]">10 Points</Text>
          <Text className="items-center justify-center px-3 text-gray-400">
            Points can be converted to money, voucher, or gift cards
          </Text>
          <View className="flex-row">
            <Text className="items-center justify-center text-gray-400">
              For more info heck your
            </Text>

            <TouchableOpacity>
              <Text className="text-[#7cc464]"> wallet</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View className="p-5 bg-white space-y-4">
          <TouchableOpacity
            onPress={() => navigation.navigate("FillDeviceInfo")}
            className="rounded-2xl bg-[#7cc464] p-4 mx-3"
          >
            <Text className="text-center text-white text-lg font-bold">
              Add to Cart
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default EstimateScreen;
