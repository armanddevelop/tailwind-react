import { ButtonHTMLAttributes } from "react";

interface ICheckoutButtonProp extends ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
}

export const CheckoutButton = (props: ICheckoutButtonProp): JSX.Element => {
  return <button {...props}>{props.label}</button>;
};
