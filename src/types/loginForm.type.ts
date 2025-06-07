import { HTMLAttributes } from "react";

export interface LoginFormProps extends HTMLAttributes<HTMLDivElement> {
  callbackUrl?: string;
  errorUrl?: string;
}
