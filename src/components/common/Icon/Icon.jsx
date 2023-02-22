import { memo } from "react";
import s from "./Icon.module.css";
import star from "src/assets/icons/star.svg";
import watcher from "src/assets/icons/watcher.svg";

export const Icon = memo(({ type }) => {
  let src = star;

  switch (type) {
    case "star":
      src = star;
      break;
    case "watcher":
      src = watcher;
      break;
  }

  return <img className={s.icon} src={src} alt={`${type} icon`} />;
});
