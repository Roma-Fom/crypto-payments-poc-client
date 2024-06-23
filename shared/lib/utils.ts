import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export type ObjectValues<T> = T[keyof T];

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
