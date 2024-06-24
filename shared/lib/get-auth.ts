"use server";
import { cookies } from "next/headers";

export async function getAuth(): Promise<string | undefined> {
  const token = cookies().get(process.env.AUTH_HEADER as string)?.value;
  return token;
}
