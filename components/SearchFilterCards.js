import { Text, TouchableOpacity, Image } from "react-native";
import React, { useState } from "react";

const SearchFilterCard = ({ title }) => {
  const [activeFilter, setActiveFilter] = useState("");
  const [pressed, setPressed] = useState(false);
  const [touched, setTouched] = useState(false);

// console.log(activeFilter)
// console.log("--------")
// console.log(title)
// console.log("############")

  return (
<>
    <TouchableOpacity
      onPress={() => {
        setActiveFilter(title);
        setPressed(!pressed)
        // setTouched(!touched)
      }}
      className="flex-row pb-2 items-center"
    >
      <Text
        className={
          activeFilter == title
            ? "bg-[#7cc464] mx-1 p-2 px-3 rounded-3xl"
            : "bg-white mx-1 p-2 px-3 rounded-3xl"
        }
      >
        {title}
    {/* {touched && (
        <Text>Hello</Text>
    )} */}
      </Text>
      {/* {pressed & <Text>Hello2</Text>} */}
    </TouchableOpacity>
    </>
  );
};

export default SearchFilterCard;

  //   <TouchableOpacity
  //     onPress={() => {
  //       setActiveFilter({ title });
  //     }}
  //     className="flex-row pb-2 items-center"
  //   >
  //     <Text
  //       className={
  //         activeFilter === { title }
  //           ? "bg-[#7cc464] mx-1 p-2 px-3 rounded-3xl"
  //           : "bg-white mx-1 p-2 px-3 rounded-3xl"
  //       }
  //     >
  //       {title}
  //     </Text>
  //   </TouchableOpacity>
  // );