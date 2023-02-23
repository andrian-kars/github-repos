import { memo } from "react";
import s from "./Button.module.css";
import cn from "classnames";
import { Text } from "../Text/Text";

export const Button = memo(
  ({ children, onClick, active = false, className }) => (
    <button
      className={cn(s.button, active && s.active, className)}
      onClick={onClick}
    >
      <Text size="semiBig">{children}</Text>
    </button>
  )
);
