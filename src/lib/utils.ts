import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const convertToAscii = (str: string): string => {
  // Replace any character that is not a letter, number, hyphen, or underscore
  return str.replace(/[^a-zA-Z0-9-_]/g, '_');
};