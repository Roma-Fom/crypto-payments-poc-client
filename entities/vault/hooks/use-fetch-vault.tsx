import { isError } from "@/shared/lib";
import { useQuery } from "react-query";

import { getAccountVault } from "../api";

export const useFetchVault = () =>
  useQuery({
    queryKey: "vault",
    queryFn: async () => {
      const result = await getAccountVault();
      if (isError(result)) throw new Error(result.error.message);
      return result.value;
    },
  });
