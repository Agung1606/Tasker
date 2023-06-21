import { View, Text, FlatList, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import React from "react";

import { FontAwesome5 } from "@expo/vector-icons";

import { TASKS } from "../constant";
import { CardTask } from "../components";

const Projects = () => {
  return (
    <SafeAreaView className="flex-1 mx-2">
      <View className="mb-4 py-4 flex-row space-x-6 bg-slate-200/80 rounded-b-2xl">
        <TouchableOpacity className="bg-blue-500 flex-row items-center space-x-6 p-4 rounded-2xl">
          <FontAwesome5 name="clipboard-list" size={22} color={"#FFF"} />
          <Text className="font-InterSemiBold text-white">To do</Text>
        </TouchableOpacity>
        <TouchableOpacity className="bg-white flex-row items-center space-x-6 p-4 rounded-2xl">
          <FontAwesome5 name="clipboard-list" size={22} color={"#3b82f6"} />
          <Text className="font-InterSemiBold">In progress</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={TASKS}
        renderItem={({ item }) => (
          <CardTask
            key={item.id}
            task={item.task}
            level={item.level}
            desc={item.desc}
            time={item.time}
            day={item.day}
          />
        )}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item) => item.id}
      />
    </SafeAreaView>
  );
};

export default Projects;
