import React from "react";
import { View, ScrollView, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { assets, REMINDER, INFOTASKS } from "../constant";
import {
  TaskHeader,
  CardRemainder,
  CardInfoTask,
} from "../components";

const Tasks = () => {
  return (
    <SafeAreaView className="flex-1">
      <ScrollView showsVerticalScrollIndicator={false} className="mx-2">
        <TaskHeader title="Tasker" imgUri={assets.defaultProfile} />
        <View className="flex-row justify-center items-center flex-wrap mb-6">
          {REMINDER.map((task) => (
            <CardRemainder
              key={task.id}
              icon={task.icon}
              nums={task.nums}
              text={task.text}
            />
          ))}
        </View>
        {INFOTASKS.map((item) => (
          <CardInfoTask
            key={item.id}
            dotColor={item.dotColor}
            status={item.status}
            numsTask={item.numsTask}
          />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Tasks;
