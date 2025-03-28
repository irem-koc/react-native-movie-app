import { fetchMovie, fetchMovieDetails } from "@/services/api";
import { useQuery } from "@tanstack/react-query";

export const useApiGetMovies = (query: string) => {
  return useQuery({
    queryKey: ["fetchMovie", query],
    queryFn: () => fetchMovie({ query }),
    placeholderData: (prev) => prev,
  });
};
export const useApiGetMovieDetails = (movieId: string) => {
  return useQuery({
    queryKey: ["fetchMovieDetails", movieId],
    queryFn: () => fetchMovieDetails({ movieId }),
    enabled: !!movieId,
  });
};
