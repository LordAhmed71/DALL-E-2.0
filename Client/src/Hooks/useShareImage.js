import { useMutation, useQueryClient } from "@tanstack/react-query";
import { shareImage } from "../Services/postsApi";
import toast from "react-hot-toast";

export function useShareImage() {
  const queryClient = useQueryClient();
  const { mutate: share, isPending: isSharing } = useMutation({
    mutationFn: (form) => shareImage(form),
    onSuccess: () => {
      toast.success("Image Shared Successfully");
      queryClient.invalidateQueries({ queryKey: ["posts"] });
    },
    onError: (err) => toast.error(err.message),
  });
  return { share, isSharing };
}
