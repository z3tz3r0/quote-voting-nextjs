import { HTMLAttributes } from "react";

export interface LoginFormProps extends HTMLAttributes<HTMLDivElement> {
  callbackUrl?: string;
  errorUrl?: string;
}

export interface SignInPageProps {
  searchParams?: Record<"callbackUrl" | "error", string>;
}
