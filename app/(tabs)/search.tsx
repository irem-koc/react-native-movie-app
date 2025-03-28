import MovieCard from "@/components/molecules/MovieCard/MovieCard";
import SearchBar from "@/components/molecules/SearchBar/SearchBar";
import { icons } from "@/constants/icons";
import { images } from "@/constants/images";
import { useApiGetMovies } from "@/hooks/api";
import useDebounce from "@/hooks/useDebounce";
import React, { useState } from "react";
import { ActivityIndicator, FlatList, Image, Text, View } from "react-native";

const Search = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const debouncedSearch = useDebounce(searchTerm, 500);
  const { data, isLoading, isError, error } = useApiGetMovies(debouncedSearch);

  return (
    <View className="flex-1 bg-primary">
      <Image source={images.bg} className="absolute w-full z-0" />
      <FlatList
        data={data}
        renderItem={({ item }) => <MovieCard {...item} />}
        keyExtractor={(item) => item.id.toString()}
        numColumns={3}
        columnWrapperStyle={{
          justifyContent: "center",
          gap: 16,
          marginVertical: 16,
        }}
        contentContainerStyle={{ paddingBottom: 100 }}
        className="px-5"
        scrollEnabled={false}
        ListHeaderComponent={
          <>
            <View className="w-full flex-row justify-center items-center mt-20">
              <Image source={icons.logo} className="w-12 h-10" />
            </View>
            <View className="my-5">
              <SearchBar
                value={searchTerm}
                onChangeText={(text: string) => setSearchTerm(text)}
                placeholder="Search movies..."
              />
            </View>
            {isLoading && (
              <ActivityIndicator
                size={"large"}
                color={"#0000ff"}
                className="my-3"
              />
            )}
            {isError && (
              <View>
                <Text className="text-white">
                  Error fetching: {error.message}
                </Text>
              </View>
            )}
            {!isError &&
              !isLoading &&
              data.length > 0 &&
              searchTerm.trim().length > 0 && (
                <Text className="text-xl text-white font-bold">
                  Search results for:{"   "}
                  <Text className="text-accent">{searchTerm}</Text>
                </Text>
              )}
          </>
        }
        ListEmptyComponent={
          <>
            {!isError && !isLoading && (
              <View className="mt-10 px-5">
                <Text className="text-center text-gray-500">
                  {searchTerm.trim()
                    ? "No movies found"
                    : "Search for a movie."}
                </Text>
              </View>
            )}
          </>
        }
      />
    </View>
  );
};

export default Search;
