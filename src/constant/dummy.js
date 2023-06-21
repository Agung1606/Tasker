import { AntDesign, FontAwesome5, MaterialIcons } from "@expo/vector-icons";

export const REMINDER = [
  {
    id: 1,
    icon: <AntDesign name="clockcircleo" size={22} color="#ffa500" />,
    nums: "08",
    text: "Pending Tasks",
  },
  {
    id: 2,
    icon: <AntDesign name="folderopen" size={22} color="#00FF00" />,
    nums: "26",
    text: "Active Projects",
  },
  {
    id: 3,
    icon: <FontAwesome5 name="clipboard-list" size={22} color="#Ff0000" />,
    nums: "89",
    text: "Total Tasks",
  },
  {
    id: 4,
    icon: <MaterialIcons name="group" size={22} color="#0000ff" />,
    nums: "12",
    text: "Teams",
  },
];

export const INFOTASKS = [
  {
    id: 1,
    dotColor: "bg-[#0000ff]",
    status: "Proposed",
    numsTask: 4
  },
  {
    id: 2,
    dotColor: "bg-[#ffa500]",
    status: "In Progress",
    numsTask: 15
  },
  {
    id: 3,
    dotColor: "bg-[#Ff0000]",
    status: "Review",
    numsTask: 12
  },
  {
    id: 4,
    dotColor: "bg-[#00FF00]",
    status: "Completed",
    numsTask: 9
  },
];

export const TASKS = [
  {
    id: 1,
    task: "Design UI/UX for Facebook",
    level: "Medium",
    desc: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
    time: "08.00 AM - 05.30 PM",
    day: "Thus 30 Dec",
  },
  {
    id: 2,
    task: "Learn Data structure and Algorithm",
    level: "Hard",
    desc: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
    time: "06.00 AM - 12.30 PM",
    day: "Thus 16 Jun",
  },
  {
    id:3,
    task: "Excersice",
    level: "Medium",
    desc: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
    time: "05.00 AM - 06.00 AM",
    day: "Thus 16 Jun",
  },
];
