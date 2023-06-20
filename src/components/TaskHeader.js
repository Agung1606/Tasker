import { View, Text, TouchableOpacity } from "react-native";
import { Avatar, Badge } from "react-native-paper";
import { Feather } from "@expo/vector-icons";
import React from "react";

const TaskHeader = ({ title, imgUri }) => {
  return (
    <View className="flex-row justify-between items-center my-4">
      <Text className="font-InterMedium text-3xl">{title}</Text>
      <View className="flex-row items-center space-x-4">
        <TouchableOpacity>
          <Feather name="search" size={24} color={"#7D7D7D"} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Feather name="bell" size={24} color={"#7D7D7D"} />
          <Badge className="absolute -top-2 -right-2 bg-blue-500">2</Badge>
        </TouchableOpacity>
        <Avatar.Image source={imgUri} size={45} />
      </View>
    </View>
  );
};

export default TaskHeader;
