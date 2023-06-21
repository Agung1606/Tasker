import { View, Text } from "react-native";
import React from "react";

const CardRemainder = ({ icon, nums, text}) => {
  return (
    <View className="w-[45%] m-2 p-4 border-[1.5px] border-gray-300/80 rounded-lg">
      <View className="flex-row items-center space-x-4 mb-2">
        {icon}
        <Text className="font-InterSemiBold text-xl">{nums}</Text>
      </View>
      <Text className="font-InterMedium text-[16px] text-gray-400">
        {text}
      </Text>
    </View>
  );
};

export default CardRemainder;
