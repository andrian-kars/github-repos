import { memo } from "react";
import s from "./Input.module.css";

export const Input = memo(({ type = "text", value, onChange, placeholder }) => {
  function handleValueChange(e) {
    onChange(e.target.value);
  }

  return (
    <input
      className={s.item}
      type={type}
      value={value}
      onChange={handleValueChange}
      placeholder={placeholder}
    />
  );
});
