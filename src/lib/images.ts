import { api } from "../utils/apiUtils";

export const getThumbnailFromId = async (
  breed_ids: string
): Promise<string | null> => {
  const response = await api.get("images/search", {
    params: {
      breed_ids,
      limit: 1,
    },
  });
  return response.data[0].url as string | null;
};

export const getImagesFromId = async (
  breed_ids: string,
  limit: number
): Promise<string[] | null> => {
  const response = await api.get("images/search", {
    params: {
      breed_ids,
      limit,
    },
  });
  return response.data as string[] | null;
};
