import React from "react";
import { View, ScrollView, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { assets, REMINDER, INFOTASKS, TASKS } from "../constant";
import {
  TaskHeader,
  CardRemainder,
  CardInfoTask,
  CardTask,
} from "../components";

const Tasks = () => {
  return (
    <SafeAreaView className="flex-1 mx-2">
      <ScrollView showsVerticalScrollIndicator={false}>
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
        {TASKS.map((item) => (
          <CardTask
            key={item.id}
            task={item.task}
            level={item.level}
            desc={item.desc}
            time={item.time}
            day={item.day}
          />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Tasks;
