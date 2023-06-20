import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Tasks, Projects, Chats, Team, Account } from "../screens";
import { FontAwesome5, MaterialIcons } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

const Routes = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "black",
        tabBarInactiveTintColor: "#7D7D7D",
        tabBarLabelStyle: {
          fontSize: 14,
          fontWeight: "bold",
        },
        tabBarStyle: {
          height: 70,
          paddingBottom: 10,
        }
      }}
    >
      <Tab.Screen
        name="TasksScreen"
        component={Tasks}
        options={{
          tabBarLabel: "Tasks",
          tabBarIcon: ({ color }) => (
            <FontAwesome5 name="database" size={22} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="ProjectsScreen"
        component={Projects}
        options={{
          tabBarLabel: "Projects",
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="work" size={24} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="ChatsScreen"
        component={Chats}
        options={{
          tabBarLabel: "Chats",
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="chat" size={24} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="TeamScreen"
        component={Team}
        options={{
          tabBarLabel: "Team",
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="groups" size={24} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="AccountScreen"
        component={Account}
        options={{
          tabBarLabel: "Account",
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="person" size={24} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default Routes;
