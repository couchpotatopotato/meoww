import { Cat } from "types/models/cat";
import { api } from "../utils/apiUtils";

export const getAllBreeds = async (): Promise<Cat[] | null> => {
  const response = await api.get("breeds");
  return response.data as Cat[] | null;
};

export const getBreeds = async (
  limit: number,
  page: number
): Promise<Cat[] | null> => {
  const response = await api.get("breeds", {
    params: {
      limit,
      page,
    },
  });
  return response.data as Cat[] | null;
};
