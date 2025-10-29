import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


export const shortenText = (text: string, by: number) => {
  if (text?.length > by) {
      return `${text.slice(0, by)}...`;
  }
  return text;
}
