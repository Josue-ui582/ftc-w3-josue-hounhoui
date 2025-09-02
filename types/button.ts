export type ButtonVariant = "darckblue" | "blue" | "gray" | "white" | "outline" | "default";
export type ButtonSize = "sm" | "md" | "lg";

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant;
  size?: ButtonSize;
};