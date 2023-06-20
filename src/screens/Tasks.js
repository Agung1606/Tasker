import React from "react";
import { View, ScrollView, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { assets, TASKS, INFOTASKS } from "../constant";
import { TaskHeader, CardTask, CardInfoTask, CardDesign } from "../components";

const Tasks = () => {
  return (
    <SafeAreaView className="flex-1 mx-2">
      <ScrollView>
        <TaskHeader title="Tasker" imgUri={assets.defaultProfile} />
        <View className="flex flex-row flex-wrap mb-6">
          {TASKS.map((task) => (
            <CardTask
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
        <CardDesign />
        <CardDesign />
        <CardDesign />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Tasks;
