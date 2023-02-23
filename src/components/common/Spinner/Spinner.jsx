import { memo } from "react";
import s from "./Spinner.module.css";

export const Spinner = memo(() => (
  <div className={s.container}>
    <div className={s.spinner}></div>
  </div>
));
