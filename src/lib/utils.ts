import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatLink({
  isLinkExternal,
  externalLink,
  internalLink,
}: {
  isLinkExternal: boolean;
  internalLink?: string;
  externalLink?: string;
}) {
  return (isLinkExternal ? externalLink : `/${internalLink}`) as string;
}
