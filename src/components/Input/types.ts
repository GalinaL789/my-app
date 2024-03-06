import { ChangeEvent } from "react";

export interface InputProps {
  id: string;
  name: string;
  age?: string;
  disabled?: boolean;
  placeholder?: string;
  label: string;
  type?: string;
  value?: string;
  checked?: boolean;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  error?: undefined | string;
}
