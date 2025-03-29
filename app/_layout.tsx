import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Stack } from "expo-router";
import { StatusBar } from "react-native";
import "./global.css";
const queryClient = new QueryClient();
export default function RootLayout() {
  return (
    <QueryClientProvider client={queryClient}>
      <StatusBar hidden />
      <Stack
        screenOptions={{
          headerShown: true,
          headerBackTitle: "Geri",
        }}
      >
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen
          name="movies/[id]"
          options={{ headerShown: true, title: "Film Detayları" }}
        />
      </Stack>
    </QueryClientProvider>
  );
}
