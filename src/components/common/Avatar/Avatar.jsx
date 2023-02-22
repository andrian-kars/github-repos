import { memo } from "react";
import s from "./Avatar.module.css";

export const Avatar = memo(({ src, alt }) => {
  return <img className={s.image} src={src} alt={alt} />;
});
