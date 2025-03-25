import { fetchMovie } from "@/services/api";
import { useQuery } from "@tanstack/react-query";

export const useApiGetMovies = (query: string) => {
  return useQuery({
    queryKey: ["fetchMovie", query],
    queryFn: () => fetchMovie({ query }),
  });
};
