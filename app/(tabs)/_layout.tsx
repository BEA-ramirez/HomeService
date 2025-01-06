import { Tabs } from "expo-router";
import { MaterialIcons } from "@expo/vector-icons";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerStyle: {
          backgroundColor: "#D9D9D9",
        },
        tabBarStyle: {
          backgroundColor: "#D9D9D9",
          height: 90,
          borderTopWidth: 20, // Border at the top
          borderTopColor: "#c89cc9",
        },
        tabBarActiveTintColor: "#222222", // Active tab color
        tabBarInactiveTintColor: "#888",
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: () => (
            <MaterialIcons name="home" size={30} color="#222222" />
          ),
        }}
      />
      <Tabs.Screen
        name="booking"
        options={{
          title: "Booking",
          tabBarIcon: () => (
            <MaterialIcons name="book" size={30} color="#222222" />
          ),
        }}
      />
      <Tabs.Screen
        name="calendar"
        options={{
          title: "Calendar",
          tabBarIcon: () => (
            <MaterialIcons name="calendar-month" size={30} color="#222222" />
          ),
        }}
      />
      <Tabs.Screen
        name="account"
        options={{
          title: "Account",
          tabBarIcon: () => (
            <MaterialIcons name="person" size={30} color="#222222" />
          ),
        }}
      />
    </Tabs>
  );
}
