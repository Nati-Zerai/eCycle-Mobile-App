import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";

const ContributorCard = ({ imgUrl, title }) => {
  return (
    <TouchableOpacity className="items-center mr-2">
      <Image
        source={{
          uri: imgUrl,
        }}
        className="h-14 w-14 rounded-full"
      />
      <Text className="bottom-1 mt-1 text-xs">{title}</Text>
    </TouchableOpacity>
  );
};

export default ContributorCard;
