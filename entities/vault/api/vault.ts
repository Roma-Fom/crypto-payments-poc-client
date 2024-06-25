import {
  apiCaller,
  BaseError,
  error,
  getAuth,
  ok,
  PromiseEither,
} from "@/shared/lib";

import { VaultAccountResponse } from "../model";

type GetVaultResponse = {
  vault: VaultAccountResponse | null;
};

export const getAccountVault = async (): PromiseEither<
  GetVaultResponse,
  BaseError
> => {
  try {
    const token = await getAuth();
    const { data } = await apiCaller.get<GetVaultResponse>("/vault", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return ok(data);
  } catch (e: any) {
    return error(
      e?.message || "An error occurred while fetching vault account."
    );
  }
};
