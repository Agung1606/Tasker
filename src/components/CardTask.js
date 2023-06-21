import React from "react";
import { View, Text, Image } from "react-native";
import { Entypo } from "@expo/vector-icons";

import { assets } from "../constant";

const CardTask = ({ task, level, desc, time, day }) => {
  return (
    <View className="flex-row space-x-2 bg-slate-200/80 p-4 rounded-xl mb-4">
      <Image source={assets.logo} className="w-[65px] h-[65px]" />
      <View className="flex-1">
        <View className="flex-row justify-between items-center mb-4">
          <View className="max-w-[180px]">
            <Text className="font-InterSemiBold text-lg">{task}</Text>
          </View>
          <View className="bg-pink-600/50 p-[6px] rounded-md">
            <Text className="text-red-700 font-InterRegular text-center">
              {level}
            </Text>
          </View>
        </View>
        <Text className="font-InterRegular text-gray-600 mb-2">{desc}</Text>
        <View className="flex-row justify-between items-center">
          <View className="flex-row items-center space-x-2">
            <Entypo name="stopwatch" size={16} color={"#1D7ED8"} />
            <Text className="font-InterRegular text-gray-600 text-[10px]">
              {time}
            </Text>
          </View>
          <View className="flex-row items-center space-x-2">
            <Entypo name="calendar" size={16} color={"#1D7ED8"} />
            <Text className="font-InterRegular text-gray-600 text-[10px]">
              {day}
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default CardTask;
