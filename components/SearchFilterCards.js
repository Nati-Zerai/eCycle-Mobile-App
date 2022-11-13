import { Text, TouchableOpacity, Image } from "react-native";
import React, { useState } from "react";

const SearchFilterCard = ({ title }) => {
  const [activeFilter, setActiveFilter] = useState("Laptop");
  //   console.log("====================================");
  //   console.log(activeFilter);
  //   console.log({ title });

  return (
    <TouchableOpacity
      onPress={() => {
        setActiveFilter({ title });
      }}
      className="flex-row pb-2 items-center"
    >
      <Text
        className={
          activeFilter === { title }
            ? "bg-[#7cc464] mx-1 p-2 px-3 rounded-3xl"
            : "bg-white mx-1 p-2 px-3 rounded-3xl"
        }
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default SearchFilterCard;
