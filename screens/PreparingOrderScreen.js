import { SafeAreaView } from "react-native";
import React, { useEffect } from "react";
import * as Animatable from "react-native-animatable";
import * as Progress from "react-native-progress";
import { useNavigation } from "@react-navigation/native";
import { emptyCart } from "../features/cartSlice";
import { useDispatch } from "react-redux";

const PreparingOrderScreen = () => {
  const navigation = useNavigation();

  useEffect(() => {
    setTimeout(() => {
      navigation.navigate("Track");
    }, 3000);
  }, []);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(emptyCart());
  }, [dispatch]);

  return (
    <SafeAreaView className="bg-[#7cc464] flex-1 justify-center items-center">
      <Animatable.Image
        source={require("../assets/giphy-animation.gif")}
        animation="slideInUp"
        iterationCount={1}
        className="h-96 w-96"
      />
      <Animatable.Text
        animation="slideInUp"
        iterationCount={1}
        className="text-lg my-10 font-bold text-center text-white"
      >
        Waiting for Resturant to accept your order!
      </Animatable.Text>
      <Progress.Circle size={60} indeterminate={true} color="white" />
    </SafeAreaView>
  );
};

export default PreparingOrderScreen;
