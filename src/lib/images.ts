import { Image } from "../types/models/images";
import { api } from "../utils/apiUtils";

export const getImagesFromId = async (
  breed_ids: string
): Promise<Image[] | null> => {
  const response = await api.get("images/search", {
    params: {
      breed_ids,
      limit: 4,
    },
  });
  return response.data as Image[] | null;
};
