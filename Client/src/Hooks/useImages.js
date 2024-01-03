import { useQuery } from "@tanstack/react-query";
import { getAllImages } from "../Services/postsApi";

export function useImages() {
  const { data: images, isPending } = useQuery({
    queryFn: getAllImages,
    queryKey: ["posts"],
    select: (data) => data?.reverse(),
  });
  return { images, isPending };
}
