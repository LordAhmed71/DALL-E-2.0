import { useMutation } from "@tanstack/react-query";
import { generateImage } from "../Services/postsApi";
import toast from "react-hot-toast";

export function useGenerateImage() {
  const { mutate: generate, isPending: isGenerating } = useMutation({
    mutationFn: (prompt) => generateImage(prompt),

    onSuccess: () => {
      toast.success("Image Generated Successfully");
    },
    onError: (err) => toast.error(err.message),
  });
  return { generate, isGenerating };
}
