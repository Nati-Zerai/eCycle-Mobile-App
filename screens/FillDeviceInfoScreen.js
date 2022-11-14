import {
  View,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from "react-native";
import { ArrowLeftIcon } from "react-native-heroicons/outline";
import { useNavigation, useRoute } from "@react-navigation/native";
import { SelectList } from "react-native-dropdown-select-list";
import { useState } from "react";

const FillDeviceInfoScreen = () => {
  const navigation = useNavigation();
  const {
    params: { id, imgUrl, title, rating, short_description },
  } = useRoute();

  const [selected, setSelected] = useState("");

  const healthCondition = [
    { key: "1", value: "New", disabled: true },
    { key: "2", value: "Minor Damage" },
    { key: "3", value: "Major Condtion" },
    { key: "4", value: "Out of use" },
  ];


  return (
    <ScrollView>
      <View className="relative">
        <Image
          source={{
            uri: imgUrl,
          }}
          className="w-full h-56 bg-gray-500 p-5"
        />
      </View>
      <TouchableOpacity
        onPress={navigation.goBack}
        className="absolute top-14 left-5 p-2 bg-gray-100 rounded-full"
      >
        <ArrowLeftIcon size={20} color="#00CCBB" />
      </TouchableOpacity>
      <View className="bg-white">
        <View className="px-4 pt-4">
          <Text className="font-bold text-2xl">Mobile Phone</Text>
          <Text className="font-medium text-xl">{title}</Text>
          <View className="flex-row space-x-2 my-1 mb-2"></View>
        </View>
      </View>

      {/* Details Area */}
      <Text className="text-xl mx-7 mt-5">Fill Device Details</Text>
      <View className="rounded-xl mx-7 my-3 bg-white">
        <View className="w-96 pb-4 px-4 self-center flex"></View>
        <View className="pb-2 px-4">
          <Text className="mb-1">Device Brand</Text>
          <TextInput className="w-full h-10 border rounded-md" />
        </View>
        <View className="pb-2 px-4">
          <Text className="mb-1">Device Name</Text>
          <TextInput className="w-full h-10 border rounded-md" />
        </View>
        <View className="pb-2 px-4">
          <Text className="mb-1">Years Used</Text>
          <TextInput className="w-full h-10 border rounded-md" />
        </View>
        <View className="pb-2 px-4">
          <Text className="mb-1">Heath Condition</Text>
          {/* DropDown  */}
          <SelectList
            setSelected={(val) => setSelected(val)}
            data={healthCondition}
            save="value"
          />
        </View>
        <TouchableOpacity
          className="self-center mx-4 mt-4 mb-4 px-8 py-3 rounded-2xl bg-[#7cc464]"
        >
          <Text className="text-base">Estimate</Text>
        </TouchableOpacity>

      </View>
    </ScrollView>
  );
};

export default FillDeviceInfoScreen;
