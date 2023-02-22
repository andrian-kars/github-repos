import { memo } from "react";
import s from "./Text.module.css";
import cn from "classnames";

export const Text = memo(({ color = "black", size = "medium", children }) => {
  return <p className={cn(s.text, s[color], s[size])}>{children}</p>;
});
