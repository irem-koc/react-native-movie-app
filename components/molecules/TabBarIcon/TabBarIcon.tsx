import { images } from "@/constants/images";
import React from "react";
import { Image, ImageBackground, Text, View } from "react-native";
type Props = {
  focused: boolean;
  tabIcon: string;
  title: string;
};
const TabBarIcon = (props: Props) => {
  const { focused, tabIcon, title } = props;
  if (focused) {
    return (
      <ImageBackground
        className="flex flex-row w-full flex-1 min-w-[112px] min-h-14 mt-4 justify-center items-center rounded-full overflow-hidden"
        source={images.highlight}
      >
        <Image source={tabIcon} tintColor={"#151322"} className="size-5" />
        <Text className="text-secondary text-base font-semibold ml-2">
          {title}
        </Text>
      </ImageBackground>
    );
  }
  return (
    <View className="size-full justify-center items-center mt-4 rounded-full">
      <Image source={tabIcon} tintColor={"#A8B5DB"} className="size-5" />
    </View>
  );
};

export default TabBarIcon;
