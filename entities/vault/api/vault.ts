import {
  apiCaller,
  BaseError,
  error,
  getAuth,
  ok,
  PromiseEither,
} from "@/shared/lib";

import { VaultAccountResponse } from "../model";

export const getAccountVault = async (): PromiseEither<
  VaultAccountResponse | null,
  BaseError
> => {
  const token = await getAuth();
  try {
    const { data } = await apiCaller.get<VaultAccountResponse | null>(
      "/vault",
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return ok(data);
  } catch (e: any) {
    return error(
      e?.message || "An error occurred while fetching vault account."
    );
  }
};
