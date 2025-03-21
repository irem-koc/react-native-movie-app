import SearchBar from "@/components/molecules/SearchBar/SearchBar";
import { icons } from "@/constants/icons";
import { images } from "@/constants/images";
import { fetchMovie } from "@/services/api";
import { useRouter } from "expo-router";
import { useEffect } from "react";
import { Image, ScrollView, View } from "react-native";

export default function Index() {
  const router = useRouter();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchMovie("");
        console.log(data, "---->dataaa");
      } catch (error) {
        console.error("Error fetching movie:", error);
      }
    };

    fetchData();
  }, []);

  console.log(router, "routerrouterrouter");
  return (
    <View className="flex-1 bg-primary">
      <Image source={images.bg} className="absolute w-full z-0" />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          minHeight: "100%",
          paddingBottom: 10,
        }}
        className="flex-1 px-5"
      >
        <Image source={icons.logo} className="w-12 h-10 mt-20 mb-5 mx-auto" />
        <View className="flex-1 mt-5">
          <SearchBar
            onPress={() => router.push("/search")}
            placeholder="Search for a movie"
          />
        </View>
      </ScrollView>
    </View>
  );
}
