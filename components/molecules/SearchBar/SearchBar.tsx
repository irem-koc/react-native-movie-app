import { icons } from "@/constants/icons";
import React from "react";
import { Image, TextInput, View } from "react-native";
type Props = {
  onPress?: () => void;
  onChangeText?: () => void;
  value?: () => string;
  placeholder: string;
};
const SearchBar = (props: Props) => {
  const { onPress, placeholder, value, onChangeText } = props;
  return (
    <View className="flex-row items-center bg-dark-200 rounded-full px-5 py-4">
      <Image
        source={icons.search}
        className="size-5"
        resizeMode="contain"
        tintColor="#ab8bff"
      />
      <TextInput
        onPress={onPress}
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        placeholderTextColor={"#ab8bff"}
        className="flex-1 ml-2 text-white"
      />
    </View>
  );
};

export default SearchBar;
