import { useApiGetMovieDetails } from "@/hooks/api";
import { useLocalSearchParams } from "expo-router";
import React from "react";
import { Text, View } from "react-native";

const MovieDetails = () => {
  const { id } = useLocalSearchParams<{ id: string }>();
  const { data } = useApiGetMovieDetails(id);
  console.log(data, "datadatadata");
  return (
    <View className="flex-1 bg-primary">
      <Text>MovieDetails</Text>
    </View>
  );
};

export default MovieDetails;
