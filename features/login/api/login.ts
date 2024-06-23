import { error, ok } from "@/shared/lib";
import axios, { AxiosError } from "axios";

export const login = async (id: string) => {
  try {
    const { data } = await axios.post("/api/login", { id });
    return ok(data);
  } catch (e) {
    const err = e as AxiosError<{ message: string }>;
    return error({
      message: err.response?.data?.message || "An error occurred",
    });
  }
};
