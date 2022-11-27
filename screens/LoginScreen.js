import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import {
  EnvelopeIcon,
  EyeSlashIcon,
  LockClosedIcon,
} from "react-native-heroicons/outline";
import { AntDesign } from "@expo/vector-icons";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigation } from "@react-navigation/native";
import { useDispatch } from "react-redux";
import { addToCredential } from "../features/credentialSlice.js";
import { auth, db } from "../firebase.config.jsx";
import { onValue, ref } from "firebase/database";
import Footer from "../components/Footer.js";

const LoginScreen = () => {
  const navigation = useNavigation();

  const [userId, setUserId] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  //Redux
  const dispatch = useDispatch();
  const addItemToCredential = (aa) => {
    dispatch(addToCredential(aa));
  };

  // read firebase
  function readCredentialFirebase(x) {
    const starCountRef = ref(db, "users/" + x);
    onValue(starCountRef, (snapshot) => {
      const data = snapshot.val();
      addItemToCredential(data);
      console.log("data prop:   " + data);
    });
  }
  // console.log("userId:   " + userId);

  //Firebase login
  function signIn() {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        // setUserId(user.uid);
        console.log("userId:   " + user.uid);

        readCredentialFirebase(user.uid);
        setTimeout(() => {
          navigation.navigate("Home");
        }, 1500);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage);
      });
  }

  return (
    <View>
      <View className="bg-white w-full h-72 flex justify-end border-b-2 border-green-200">
        <View>
          <Image
            source={{
              uri: "https://tunza.eco-generation.org/file/e-waste%20recycling%20logo.jpg",
            }}
            className="h-[90%] w-[60%] self-end"
          />
          <View className="absolute top-16 left-6">
            <Text className="font-bold text-2xl mb-4">Log in</Text>
            <Text>Welcome to eCycle</Text>
          </View>
        </View>
      </View>
      <ScrollView className="mb-72">
        <View className="bg-gray-100 p-1">
          <Text className="font-bold text-2xl px-4 pt-4">
            Log in to your account
          </Text>
          <View className="flex-row items-center bg-gray-200 rounded-3xl px-4 w-[80%] mx-[10%] mt-[5%] h-12">
            <EnvelopeIcon size={30} color="gray" />
            <TextInput
              placeholder="Enter you full Name"
              value={email}
              onChangeText={(Text) => {
                setEmail(Text);
              }}
              className="pl-2"
            ></TextInput>
          </View>
          <View className="flex-row items-center bg-gray-200 rounded-3xl px-4 w-[80%] mx-[10%] my-[5%] h-12">
            <LockClosedIcon size={30} color="gray" />
            <TextInput
              placeholder="Enter you password"
              value={password}
              onChangeText={(Text) => {
                setPassword(Text);
              }}
              className="pl-2 flex-1"
            ></TextInput>
            <TouchableOpacity>
              <EyeSlashIcon size={30} color="gray" />
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            // onPress={readCredentialFirebase(userId)}
            onPress={signIn}
            className="bg-[#5cab44]  rounded-3xl px-4 w-[80%] mx-[10%] my-[5%] h-12 flex justify-center"
          >
            <Text className="self-center items-center text-white text-xl">
              Log in
            </Text>
          </TouchableOpacity>
          <View className="flex justify-center items-center">
            {/* <Text className="mb-4 pb-1 border-b-2 border-gray-300">Or sign up with</Text> */}
            <View className="flex-row justify-center space-x-16 mt-8">
              <TouchableOpacity>
                <AntDesign name="facebook-square" size={36} color="#3b5998" />
              </TouchableOpacity>
              <AntDesign name="linkedin-square" size={36} color="#495ea3" />
              <AntDesign name="google" size={36} color="lightgray" />
            </View>
            <View className="flex-row mt-4 mb-4 pt-2 border-t-2 border-gray-300">
              <Text>Don't have an account ?</Text>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate("SignUp");
                }}
              >
                <Text className="text-[#00ccbb] px-2">SIGN UP</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default LoginScreen;
