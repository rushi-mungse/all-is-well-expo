import React from "react";
import { Tabs, useRouter } from "expo-router";
import {
  Ionicons,
  MaterialCommunityIcons,
  MaterialIcons,
  Entypo,
} from "@expo/vector-icons";
import { TouchableOpacity, Text } from "react-native";
import { colors } from "@/constants";

export default function TabLayout() {
  const router = useRouter();
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: colors.primary,
        tabBarStyle: {
          backgroundColor: "black",
          borderTopColor: "#ffffff30",
          height: 60,
          paddingBottom: 10,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          headerStyle: {
            backgroundColor: "black",
            borderBottomColor: "#ffffff30",
            borderWidth: 0.5,
          },
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => router.back()}
              style={{ paddingLeft: 16 }}
            >
              {router.canGoBack() && (
                <Ionicons
                  name="chevron-back"
                  size={20}
                  color={colors.primary}
                />
              )}
            </TouchableOpacity>
          ),
          headerRight: () => (
            <Text
              style={{
                color: colors.primary,
                paddingRight: 16,
              }}
            >
              Home
            </Text>
          ),
          tabBarLabel: "Home",
          headerTitle: "",
          headerTintColor: colors.primary,
          tabBarIcon: ({ color }) => (
            <Ionicons name="home" size={24} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="badminton"
        options={{
          headerStyle: {
            backgroundColor: "black",
            borderBottomColor: "#ffffff30",
            borderWidth: 0.5,
          },
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => router.back()}
              style={{ paddingLeft: 16 }}
            >
              {router.canGoBack() && (
                <Ionicons
                  name="chevron-back"
                  size={20}
                  color={colors.primary}
                />
              )}
            </TouchableOpacity>
          ),
          headerRight: () => (
            <Text
              style={{
                color: colors.primary,
                paddingRight: 16,
              }}
            >
              Badminton
            </Text>
          ),
          tabBarLabel: "Badminton",
          headerTitle: "",
          headerTintColor: colors.primary,
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="badminton" size={24} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="support-center"
        options={{
          headerStyle: {
            backgroundColor: "black",
            borderBottomColor: "#ffffff30",
            borderWidth: 0.5,
          },
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => router.back()}
              style={{ paddingLeft: 16 }}
            >
              {router.canGoBack() && (
                <Ionicons
                  name="chevron-back"
                  size={20}
                  color={colors.primary}
                />
              )}
            </TouchableOpacity>
          ),
          headerRight: () => (
            <Text style={{ color: colors.primary, paddingRight: 16 }}>
              Support Center
            </Text>
          ),
          tabBarLabel: "Support Center",
          headerTitle: "",
          headerTintColor: "#E18026",
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="support-agent" size={24} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="blogs"
        options={{
          headerStyle: {
            backgroundColor: "black",
            borderBottomColor: "#ffffff30",
            borderWidth: 0.5,
          },
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => router.back()}
              style={{ paddingLeft: 16 }}
            >
              {router.canGoBack() && (
                <Ionicons
                  name="chevron-back"
                  size={20}
                  color={colors.primary}
                />
              )}
            </TouchableOpacity>
          ),
          headerRight: () => (
            <Text style={{ color: colors.primary, paddingRight: 16 }}>
              Blogs
            </Text>
          ),
          tabBarLabel: "Blogs",
          headerTitle: "",
          headerTintColor: colors.primary,
          tabBarIcon: ({ color }) => (
            <Entypo name="text-document" size={24} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
