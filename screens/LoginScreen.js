import { View, Text, ImageBackground, TextInput, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { EnvelopeIcon, EyeSlashIcon, LockClosedIcon, UserIcon } from 'react-native-heroicons/outline'
import { AntDesign, EvilIcons } from '@expo/vector-icons';


// Fontisto

const LoginScreen = () => {
  return (
    <View>
      <View>
        <View className="bg-white w-full h-72 flex justify-end border-b-2 border-green-200">
          <View>
            <Image
              source={{ uri: "https://tunza.eco-generation.org/file/e-waste%20recycling%20logo.jpg" }}
              className="h-[90%] w-[60%] self-end" />
            <View className="absolute top-16 left-6">
              <Text className="font-bold text-2xl mb-4">Sign Up</Text>
              <Text>Welcome to Ecycle</Text>
            </View>
          </View>
        </View>
        <View className="bg-gray-100 p-1">
          <Text className="font-bold text-2xl px-4 pt-4">Create an account</Text>
          <View className="flex-row items-center bg-gray-200 rounded-3xl px-4 w-[80%] mx-[10%] mt-[5%] h-12">
            <EnvelopeIcon size={30} color="gray" />
            <TextInput placeholder='Enter you full Name' value='' className="pl-2"></TextInput>
          </View>
          <View className="flex-row items-center bg-gray-200 rounded-3xl px-4 w-[80%] mx-[10%] mt-[5%] h-12">
            <UserIcon size={30} color="gray" />
            <TextInput placeholder='Enter you full Name' value='' className="pl-2"></TextInput>
          </View>
          <View className="flex-row items-center bg-gray-200 rounded-3xl px-4 w-[80%] mx-[10%] my-[5%] h-12">
            <LockClosedIcon size={30} color="gray" />
            <TextInput placeholder='Enter you password' value='' className="pl-2 flex-1"></TextInput>
            <TouchableOpacity>
              <EyeSlashIcon size={30} color="gray" />
            </TouchableOpacity>
          </View>
          <TouchableOpacity className="bg-[#5cab44]  rounded-3xl px-4 w-[80%] mx-[10%] my-[5%] h-12 flex justify-center">
            <Text className="self-center items-center text-white text-xl">Sign up</Text>
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
              <Text>Have an account ?</Text>
              <TouchableOpacity><Text className="text-[#00ccbb] px-2">SIGN UP</Text></TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </View>
  )
}

export default LoginScreen