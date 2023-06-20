import React from "react";
import { View, Text, Image } from "react-native";
import { Entypo } from "@expo/vector-icons";

import { assets } from "../constant";

const CardDesign = () => {
  return (
    <View className="flex-row space-x-4 bg-slate-200/80 p-4 rounded-xl mb-4">
      <Image source={assets.logo} className="w-[65px] h-[65px]" />
      <View className="flex-1">
        <View className="flex-row justify-between items-center mb-4">
          <Text className="font-InterSemiBold text-lg">Design Task Card</Text>
          <View className="bg-red-600/50 p-[6px] rounded-md">
            <Text className="text-red-600">Medium</Text>
          </View>
        </View>
        <Text className="font-InterRegular text-gray-600 mb-2">
          At prospyr we are looking to revolutionize patient
        </Text>
        <View className="flex-row justify-between items-center">
          <View className="flex-row items-center space-x-2">
            <Entypo name="stopwatch" size={16} color={"#1D7ED8"} />
            <Text className="font-InterRegular text-gray-600 text-[10px]">
              08.00 AM - 05.30 PM
            </Text>
          </View>
          <View className="flex-row items-center space-x-2">
            <Entypo name="calendar" size={16} color={"#1D7ED8"} />
            <Text className="font-InterRegular text-gray-600 text-[10px]">
              Thus 30 Dec
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default CardDesign;
