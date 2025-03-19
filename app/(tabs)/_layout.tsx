import { icons } from "@/constants/icons";
import { images } from "@/constants/images";
import { Tabs } from "expo-router";
import React from "react";
import { Image, ImageBackground, Text } from "react-native";

const Layout = () => {
  return (
    <Tabs>
      <Tabs.Screen
        name="index"
        options={{
          title: "Index",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <>
              <ImageBackground source={images.highlight}>
                <Image
                  source={icons.home}
                  tintColor={"#151322"}
                  className="size-5"
                />
                <Text>Home</Text>
              </ImageBackground>
            </>
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "profile",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <>
              <ImageBackground source={images.highlight}>
                <Image
                  source={icons.person}
                  tintColor={"#151322"}
                  className="size-5"
                />
                <Text>Home</Text>
              </ImageBackground>
            </>
          ),
        }}
      />
      <Tabs.Screen
        name="saved"
        options={{
          title: "saved",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <>
              <ImageBackground source={images.highlight}>
                <Image
                  source={icons.save}
                  tintColor={"#151322"}
                  className="size-5"
                />
                <Text>Home</Text>
              </ImageBackground>
            </>
          ),
        }}
      />
      <Tabs.Screen
        name="saved"
        options={{
          title: "saved",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <>
              <ImageBackground source={images.highlight}>
                <Image
                  source={icons.save}
                  tintColor={"#151322"}
                  className="size-5"
                />
                <Text>Home</Text>
              </ImageBackground>
            </>
          ),
        }}
      />
      <Tabs.Screen
        name="search"
        options={{
          title: "search",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <>
              <ImageBackground source={images.highlight}>
                <Image
                  source={icons.search}
                  tintColor={"#151322"}
                  className="size-5"
                />
                <Text>Home</Text>
              </ImageBackground>
            </>
          ),
        }}
      />
    </Tabs>
  );
};

export default Layout;
