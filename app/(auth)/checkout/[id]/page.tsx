import { getPaymentIntent } from "@/entities/payment";
import Checkout from "@/views/checkout";

export default async function Page(props: { params: { id: string } }) {
  console.log("Checkout page id: ", props.params.id);
  const p = await getPaymentIntent(props.params.id);
  console.log(p);
  return <Checkout />;
}
