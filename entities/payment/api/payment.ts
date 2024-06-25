import { GetPaymentResponse } from "@/entities/payment/model";
import { apiCaller, error, getAuth, ok } from "@/shared/lib";

export const getPaymentIntent = async (id: string) => {
  try {
    const token = await getAuth();
    const { data } = await apiCaller.get<GetPaymentResponse>(
      `/payments/${id}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return ok(data);
  } catch (e: any) {
    return error(
      e?.message || "An error occurred while fetching payment intent."
    );
  }
};
