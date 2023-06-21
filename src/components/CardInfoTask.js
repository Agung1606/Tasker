import { View, Text, TouchableOpacity } from "react-native";
import { Entypo } from "@expo/vector-icons";
import React from "react";

const CardInfoTask = ({ dotColor, status, numsTask }) => {
  return (
    <TouchableOpacity className="flex-row justify-between items-center p-4 mb-4 border-[1.5px] border-gray-300/80 rounded-lg">
      <View className="flex-row items-center space-x-3">
        <View className={`${dotColor} w-4 h-4 rounded-full`} />
        <Text className="font-InterBold text-lg">{status}</Text>
      </View>
      <View className="flex-row items-center space-x-1">
        <Text className="font-InterMedium text-gray-400">{numsTask} tasks</Text>
        <Entypo name="chevron-right" size={20} color={"#9ca3af"} />
      </View>
    </TouchableOpacity>
  );
};

export default CardInfoTask;
