import { useApiGetMovieDetails } from "@/hooks/api";
import { useLocalSearchParams } from "expo-router";
import React from "react";
import { ActivityIndicator, Image, ScrollView, Text, View } from "react-native";

const MovieDetails = () => {
  const { id } = useLocalSearchParams<{ id: string }>();
  const { data, isLoading, error } = useApiGetMovieDetails(id);

  if (isLoading) {
    return (
      <View className="flex-1 bg-primary justify-center items-center">
        <ActivityIndicator size="large" color="#AB8BFF" />
      </View>
    );
  }

  if (error) {
    return (
      <View className="flex-1 bg-primary justify-center items-center">
        <Text className="text-light-100 text-lg">
          Failed to load movie details.
        </Text>
      </View>
    );
  }

  return (
    <ScrollView className="flex-1 bg-primary p-4">
      {data?.poster_path && (
        <Image
          source={{ uri: `https://image.tmdb.org/t/p/w500${data.poster_path}` }}
          className="w-full h-96 rounded-lg mb-4"
        />
      )}
      <Text className="text-light-100 text-2xl font-bold mb-2">
        {data?.title}
      </Text>
      <Text className="text-light-200 text-lg mb-4">{data?.overview}</Text>
      <Text className="text-light-300 text-base">
        Release Date: {data?.release_date}
      </Text>
      <Text className="text-light-300 text-base">
        Rating: {data?.vote_average} / 10
      </Text>
    </ScrollView>
  );
};

export default MovieDetails;
