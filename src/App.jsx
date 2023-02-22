import { useState } from "react";
import { Input } from "./components/common";

export const App = () => {
  const [searchValue, setSearchValue] = useState("");

  return (
    <div className="content">
      <Input
        value={searchValue}
        onChange={setSearchValue}
        placeholder="Search"
      />
    </div>
  );
};
